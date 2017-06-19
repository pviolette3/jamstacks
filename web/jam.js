////////// Global exports //////////
e = React.createElement;
jam_proto = protobuf.roots.default.jam;

////////// Utility functions //////////
function check(condition, message) {
    if (!condition) throw new Error(message);
}
check(jam_proto !== undefined, 'The protos were not loaded!');

function findPlayer(players, playerId) {
    for (var i = 0; i < players.length; ++i) {
        if (players[i].id === playerId) {
            return players[i];
        }
    }
    check(false, 'Player ' + playerId + ' does not exist in ' + players);
}

//////////  External communication //////////

// Abstract "class" defining the API.
function MessageHandler(freezer) { this.freezer = freezer; }
MessageHandler.prototype = Object.create({});
MessageHandler.prototype.sendAction = function(action, callback) {
    check(false, 'Not implemented.')
}

////////// Freezer and UI communication //////////
lastError = null;
ERROR_CLEARING_TIMEOUT = 1000;
function clearErrors(freezer) {
    freezer.get().ui.error.set('message', null);
}

function uiSetError(freezer, message) {
    console.error(message);
    freezer.get().ui.error.set('message', message);
    clearTimeout(lastError);
    lastError = setTimeout(
        clearErrors.bind(null, freezer), ERROR_CLEARING_TIMEOUT);
}

function setupEvents(freezer, sender) {
    freezer.on('update:bet', function(betSize) {
        var state = freezer.get();
        var playerId = state.ui.playerId;
        var player = findPlayer(state.players, playerId);
        var playerState = findPlayer(state.currentHand.playerStates, playerId);
        betSize = Math.round(betSize);
        var maxBet = player.stackSize - playerState.amountInPot - playerState.streetBetSize;
        if (betSize > maxBet) {
            uiSetError(freezer, 'Bet of ' + betSize +
                         ' would put more than you have (' + 
                         player.stackSize + ') in the pot.');
            return;
        } else if (playerState.streetBetSize + betSize <
                   state.currentHand.board.pot.currentBet) {
            uiSetError(
                freezer,
                'You must add at least another ' + (
                    state.currentHand.board.pot.currentBet
                    - playerState.streetBetSize));
            return;
        }
        // Set .now() in case the user is typing.
        playerState.set('betSize', betSize).now();
    });

    freezer.on('update:active', function(active) {
        var state = freezer.get();
        var playerId = state.ui.playerId;
        var playerState = findPlayer(state.currentHand.playerStates, playerId);
        playerState.set('active', !!active);
        console.log('Set active ', active);
    });
    freezer.on('update:sendAction', function() {
        console.log('Sending!');
        var state = freezer.get();
        var playerId = state.ui.playerId;
        var player = findPlayer(state.players, playerId);
        var playerState = findPlayer(state.currentHand.playerStates, playerId);
        state.ui.set('sending', true);
        var action = new jam_proto.HandState.PlayerAction();
        action.playerId = playerId;
        if (!playerState.active) {
            action.action = jam_proto.HandState.PlayerAction.Action.FOLD;
            action.betSize = 0;
        } else {
            action.betSize = playerState.betSize;
            var totalStreetBet = action.betSize + playerState.streetBetSize;
            var totalBet = totalStreetBet + playerState.amountInPot;
            if (totalBet > player.stackSize) {
                uiSetError(
                    freezer,
                    'Action would add more money to the pot (' + totalBet +
                     ') than the user has: ' + player.stackSize);
                return;
            }
            if (totalBet === player.stackSize) {
                action.action = jam_proto.HandState.PlayerAction.Action.ALL_IN;
            } else if (totalStreetBet > state.currentHand.board.pot.currentBet) {
                action.action = jam_proto.HandState.PlayerAction.Action.RAISE;
            } else if (totalStreetBet === state.currentHand.board.pot.currentBet) {
                action.action = (
                    playerState.betSize === 0 ?
                    jam_proto.HandState.PlayerAction.Action.CHECK :
                    jam_proto.HandState.PlayerAction.Action.CALL);
            } else if (totalStreetBet < state.currentHand.board.pot.currentBet) {
                uiSetError(
                    freezer,
                    'Must put at least ' +
                    state.currentHand.board.pot.currentBet +
                    ' total in the pot.');
                return;
            }
        }
        sender.sendAction(action, function(err) {
            var ui = freezer.get().ui;
            if (err) {
                ui.error.set('message', err);
            } else {
                ui.set('sending', false);
            }
        });
    });
}

////////// StateLESS components //////////
// In the below functions, all props named "state" come from freezer.js. These
// props correspond directly to protocol buffers from the server.

// A card. Can be hidden, or reveal a rank + a suit.
function Card(props) {
    var style = {};
    var kCardAspectRatio = (1260 / 4) / (2925 / 13);
    style.display = 'inline-block';
    style.width = 100;
    style.height = kCardAspectRatio * style.width;
    style.borderRadius = style.width / 20;
    style.margin = style.width / 20;
    if (props.hidden) {
        // Just apply a simple gradient.
        // 4 sets of triangles to form a checkerboard.
        var checkerWidth = style.width / 20;
        var checkerMargin = checkerWidth / 2;
        style.backgroundImage = (
            'linear-gradient(45deg, #808080 25%, transparent 25%),' +
            'linear-gradient(-45deg, #808080 25%, transparent 25%),' +
            'linear-gradient(45deg, transparent 75%, #808080 75%),' +
            'linear-gradient(-45deg, transparent 75%, #808080 75%)');
        style.backgroundSize = checkerWidth + 'px ' + checkerWidth + 'px';
        style.backgroundPosition = '0 0, 0 ' + checkerMargin + 'px,'  +
                                   ' ' + checkerMargin + 'px ' + -checkerMargin
                                   + 'px, ' + -checkerMargin + 'px 0px';
    } else {
        // Sprites go: A 2 3 4 .. K (left to right).
        // And then go: H S D C (top to bottom).
        // Sprites are
        var rankId = jam_proto.Card.Rank[props.rank];
        if (rankId == jam_proto.Card.Rank.ACE) {
            rankId = 1;
        }
        var rankIndex = rankId - 1;  // 0-index.
        var suitId = jam_proto.Card.Suit[props.suit];
        var suitIndex = -1;
        switch (suitId) {
            case jam_proto.Card.Suit.HEARTS:
                suitIndex = 0;
                break;
            case jam_proto.Card.Suit.SPADES:
                suitIndex = 1;
                break;
            case jam_proto.Card.Suit.DIAMONDS:
                suitIndex = 2;
                break;
            case jam_proto.Card.Suit.CLUBS:
                suitIndex = 3;
                break;
        }
        check(suitIndex != -1, 'Unknown suit ' + suitIndex);

        // 
        var leftPos = (100.0 / 13) * (rankIndex + rankIndex / 12) + '%';
        var topPos = (100.0 / 4) * (suitIndex + suitIndex / 3) + '%';
        style.background = 'url(assets/card_sprites.jpg) no-repeat 0 0';
        style.backgroundSize = '1300% 400%';
        style.backgroundPosition = leftPos + ' ' + topPos;
    }
    return e('div', { style: style });
}

// Just a list of cards.
function CardList(props) {
    var els = [];
    for (var i = 0; i < props.cards.length; ++i) {
        els.push(e(
            Card,
            Object.assign({key: 'card-' + i}, props.cards[i])));
    }
    return e('div', null, els);
}

// A uniquely styled div with text in it.
function SpecialMessage(props) {
    return e('div', {className: 'message'}, props.message);
}

// Render the pot.
function Pot(props) {
    return e('div', {className: 'pot'}, [
            e('div', {className: 'size', key: 'size'}, 'Pot size: ' + props.size),
            e('div', {className: 'currentBet', key: 'bet'}, 'Call bet: ' + props.currentBet),
        ]);
}

// The board. Renders 5 cards, and displays which street we are on (flop, river,
// etc.).
function Board(props) {
    return e('div', {className: 'board'}, [
        e('div', {className: 'street', key: 'street'}, 'Street: ' + props.street),
        e(Pot, Object.assign({key: 'pot'}, props.pot)),
        e(CardList, {cards: props.board.cards, key: 'cards'}),
    ]);
}

// Renders all players in the game.
function Players(props) {
    var loggedInPlayerId = props.ui.playerId;
    var els = [];
    for (var i = 0; i < props.players.length; ++i) {
        var subprops = Object.assign(
            {key: 'player-' + props.players[i].id,
            playerId: props.players[i].id},
            props);
        if (props.players[i].id === loggedInPlayerId) {
            els.push(e(LoggedInPlayerPanel, subprops));
        } else {
            els.push(e(PlayerPanel, subprops));
        }
    }
    els.push(e('div', {className: 'clearfix', key: 'clearfix'}));
    return e('div', {className: 'players'}, els);
}

// The player's information about the current hand (cards + bet in the pot).
// Cards would be hidden for players who aren't the logged in player -- but
// the server has to handle this view.
function PlayerPanel(props) {
    var isPlayerAction = props.playerId === props.currentHand.actionPlayerId;
    var player = findPlayer(props.players, props.playerId);
    var playerState = findPlayer(props.currentHand.playerStates, props.playerId);
    var newStreetBetSize = playerState.betSize + playerState.streetBetSize;
    var amountInPotText = 'Amount in pot: ' + (playerState.amountInPot + newStreetBetSize);
    if (playerState.streetBetSize > 0) {
        amountInPotText += (' (' + newStreetBetSize + ' this street)');
    }
    var betSizeText = ('Bet on ' + props.currentHand.street + ': ' +
                        newStreetBetSize);
    if (playerState.streetBetSize && playerState.betSize > 0) {
        betSizeText += ' (' + playerState.streetBetSize + ' before this action)';
    }
    var stackSizeText = 'Stack: ' + player.stackSize;
    var playerTotalInPot = playerState.amountInPot + newStreetBetSize;
    return e('div',  {className: 'player'}, [
        // Game-specific info.
        e('div', {
            key: 'name',
            className: 'name',
        }, player.name),
        e('img', {
            src: player.imageUrl || './assets/bbq.jpg',
            className: classNames({action: isPlayerAction, 'profile-pic': true}),
            key: 'img',
        }),
        e('div', {
            key: 'stack',
            className: classNames({stack: true, 'stillIn': !playerState.active}),
        },
            [
                e('span', {key: '0', className: 'stack'}, 'Stack: '),
                e('span', {key: '1', className: 'stack-size'}, player.stackSize),
                e('span', {key: '3', className: 'bet'}, 'Bet: '),
                e('span', {key: '4', className: 'bet-size'}, playerTotalInPot),
                ((newStreetBetSize > 0) ?
                    e('span', {
                        key: '5',
                        className: 'street-bet-size'},
                        '(street: ' + newStreetBetSize + ')') : null),
            ]),
        // Hand-specific info.
        e('div', {key: 'cards', className: 'cards'}, [
            e('div', {key: '0'}, 'Cards'),
            e(CardList, {key: 'cards', cards: playerState.cards}),])
    ]);
}


// The panel for the logged-in user aka the BBQ. The UI allows the BBQ player
// to place a bet, and also renders his/her cards. It also gives words of
// encouragement.
function LoggedInPlayerPanel(props) {
    var isPlayerAction = props.ui.playerId === props.currentHand.actionPlayerId;
    return e('div', {className: 'player'}, [
            e(PlayerPanel, Object.assign({key: 'player', playerId: props.playerViewId}, props)),
            e('div', {className: 'clearfix'}),
            (isPlayerAction ?
                e(PlayerControls, Object.assign({key: 'actions'}, props)) : null),
    ]);
}

function GamePending(props) {
    return e('div', null, 'Waiting for others to join..');
}

function HandResult(props) {
    return e('div',  null, 'Game over.');
}


// A component for actually playing the hand (betting, etc).
function Hand(props) {
    var els = [];
    if (props.currentHand.result) {
        els.push(e(HandResult, props));
    }
    return e('div', null, 'The hand is going');
}

function GameSummary(props) {
    return e('div', null, 'The whole game is over.')
}

////////// StateFUL Components //////////
class App extends React.Component {
    render() {
        var ui = this.props.ui;
        var gameState = this.props.gameState;
        var modal = e(ErrorModal, {error: ui.error, key: 'error'});
        if (gameState.status === jam_proto.GameState.Status.PENDING) {
            return e(GamePending);
        } else if (gameState.status === jam_proto.GameState.Status.IN_PROGRESS) {
            return e(Hand, this.props);
        } else if (gameState.status === jame_proto.GameState.Status.OGRE) {
            return e(GameSummary, this.props);
        }
        check(false, 'Unrecognized game status: ' + gameState.status);
    }

    // This will re-render the whole app when the game state changes.
    componentDidMount() { this.props.events.on('update', this.forceUpdate); }
}

// The components needed to send an action.
function PlayerControls(props) {
    return e('div', {className: 'controls'}, [
            e(FoldButton,
                Object.assign({key: 'fold', events: props.events, ui: props.ui},
                    findPlayer(props.currentHand.playerStates, props.playerViewId))
                ),
            e(Bet, Object.assign({key: 'bet', ui: props.ui}, props)),
            e(SendActionButton, {
                key: 'send',
                ui: props.ui,
                currentHand: props.currentHand,
                events: props.events})]);
}

function SendActionButton(props) {
    if (props.ui.sending) {
        return e('div', {className: 'spinner'}, 'Sending...');
    }
    function handler(event) {
        console.log(event.target);
        props.events.emit('update:sendAction');
    }
    return e('button', {
        className: 'send',
        onClick: handler}, 'Send Action!');
}

function FoldButton(props) {
    function handler(event) {
        props.events.emit('update:active', !event.target.checked);
    }
    return e('span', {className: 'checkbox'}, [
            e('span', {key: 'label', className: 'checkbox-label'}, 'Fold: '),
            e('input', {
                key: 'checkbox',
                className: 'fold-button',
                name: 'fold',
                type: 'checkbox',
                disabled: props.ui.sending,
                onChange: handler,
                checked: !props.active})]);
}

// UI to get the user's bet, based on the GameState. TODO add fun sound effects.
function Bet(props) {
    check(props.playerViewId === props.currentHand.playerViewId, 'The player views should match.');
    var player = findPlayer(props.players, props.playerViewId);
    var playerState = findPlayer(props.currentHand.playerStates, props.playerViewId);
    function tryUpdateBet(bet) {
        props.events.emit('update:bet', bet);
    }
    function handler(event) {
        var text = event.target.value;
        var bet = text.length === 0 ? 0 : parseInt(text);
        if (!isNaN(bet)) {
            tryUpdateBet(bet);
        }
    };
    // TODO make these configurable / relative to the pot etc / do the validation
    // here.
    var placeBetButtons = e('span', {className: 'bet'}, [
            e('span', {key: 'current-bet'}, 'Bet: '),
            e('input', {
                onChange: handler,
                disabled: props.ui.sending,
                value: playerState.betSize,
                className: 'bet-input',
                key: 'input'}),
            e('span', {className: 'betAmount', key: 'update-buttons'},
                [e('button', {
                    className: 'betButton',
                    disabled: props.ui.sending,
                    style: {background: 'red', color: 'green'},
                    key: 'all_in',
                    onClick: tryUpdateBet.bind(null, player.stackSize - playerState.amountInPot - playerState.streetBetSize)}, 'JAM'),
                ])
            ]);
    return playerState.active ? placeBetButtons : null;
}
