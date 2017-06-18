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

function setupEvents(freezer) {
    freezer.on('update:bet', function(betSize) {
        var state = freezer.get();
        var playerId = state.ui.playerId;
        var player = findPlayer(state.players, playerId);
        var playerState = findPlayer(state.currentHand.playerStates, playerId);
        var maxBet = player.stackSize - playerState.amountInPot;
        if (betSize > maxBet) {
            uiSetError(freezer, 'Bet of ' + betSize +
                         ' would put more than you have (' + 
                         player.stackSize + ') in the pot.');
            return;
        } else if (betSize < state.currentHand.board.pot.currentBet) {
            uiSetError(
                freezer,
                'The minimum bet is ' + state.currentHand.board.pot.currentBet);
            return;
        }
        betSize = Math.round(betSize);
        // Set .now() in case the user is typing.
        playerState.set('betSize', betSize).now();
    });

    freezer.on('update:active', function(active) {
        var state = freezer.get();
        var playerId = state.ui.playerId;
        var playerState = findPlayer(state.currentHand.playerStates, playerId);
    playerState.set('active', !!active);
    });
}

////////// StateLESS components //////////
// In the below functions, all props named "state" come from freezer.js. These
// props correspond directly to protocol buffers from the server.

// A card. Can be hidden, or reveal a rank + a suit.
function Card(props) {
    if (props.hidden) {
        return e('div', {className: 'card'}, '?? of ??');
    }
    function renderRank(rankId) {
        if (rankId <= 10) {
            return '' + rankId;
        }
        switch (rankId) {
            case jam_proto.Card.Rank.JACK:
                return 'J';
            case jam_proto.Card.Rank.QUEEN:
                return 'Q';
            case jam_proto.Card.Rank.KING:
                return 'K';
            case jam_proto.Card.Rank.ACE:
                return 'A';
            default:
                check(false, 'Unknown rank: ' + rankId);
        }
    }

    function renderSuit(suitId) {
        switch(suitId) {
            case jam_proto.Card.Suit.HEARTS:
                return 'h';
            case jam_proto.Card.Suit.SPADES:
                return 's';
            case jam_proto.Card.Suit.DIAMONDS:
                return 'd';
            case jam_proto.Card.Suit.CLUBS:
                return 'c';
        }
        check(false, 'Unknown suit: ' + suitId);
    }
    var rankId = jam_proto.Card.Rank[props.rank];
    var suitId = jam_proto.Card.Suit[props.suit];
    var cardStr = renderRank(rankId) + renderSuit(suitId);
    return e('div', {className: 'card'}, cardStr);
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

// The player's information about the current hand (cards + bet in the pot).
// Cards would be hidden for players who aren't the logged in player -- but
// the server has to handle this view.
function PlayerPanel(props) {
    var player = findPlayer(props.players, props.playerId);
    var playerState = findPlayer(props.currentHand.playerStates, props.playerId);
    var amountInPotText = 'Amount in pot: ';
    if (playerState.betSize) {
        amountInPotText += (playerState.amountInPot + playerState.betSize) +
                       ' (' + playerState.amountInPot + ' before bet)';
    } else {
        amountInPotText += playerState.amountInPot;
    }
    return e('div',  {className: 'player'}, [
        // Game-specific info.
        e('div', {key: 'name', className: 'name'}, player.name),
        e('div', {key: 'stack', className: 'stack'}, 'Stack: ' + player.stackSize),
        // Hand-specific info.
        e(CardList, {key: 'cards', cards: playerState.cards}),
        e('div', {key: 'pot', className: 'amountInPot'}, amountInPotText),
        e('div', {key: 'folded', className: 'folded'}, (
            'Folded: ' + (playerState.active ? 'no' : 'yes'))),
    ]);
}


// The panel for the logged-in user aka the BBQ. The UI allows the BBQ player
// to place a bet, and also renders his/her cards. It also gives words of
// encouragement.
function LoggedInPlayerPanel(props) {
    return e('div', null, [
            e(SpecialMessage, {key: 'message', message: 'You are a real BBQ with that hand!'}),
            e(PlayerPanel, Object.assign({key: 'player', playerId: props.playerViewId}, props)),
            e(FoldButton,
                Object.assign({key: 'fold', events: props.events},
                    findPlayer(props.currentHand.playerStates, props.playerViewId))
                ),
            e(Bet, Object.assign({key: 'bet'}, props))]);
}

function ErrorModal(props) {
    if (!props.error) {
        return null;
    }
    return e('div', {className: 'errorModal'}, props.error);
}

function GamePending(props) {
    return e('div', null, 'The game is pending.');
}

// A component for actually playing the hand (betting, etc).
function Hand(props) {
    return e('div', null, 'The hand is going');
}

function HandEnd(props) {
    return e('div', null, 'The hand is over.')
}

////////// StateFUL Components //////////
class App extends React.Component {
    render() {
        var ui = this.props.ui;
        var  gameState = this.props.gameState;
        var modal = e(ErrorModal, {error: ui.error, key: 'error'});
        if (gameState.status === jam_proto.GameState.Status.PENDING) {
            return e(GamePending);
        } else if (gameState.status === jam_proto.GameState.Status.IN_PROGRESS) {
            return e(Hand, {gameState: gameState});
        } else if (gameState.status === jame_proto.GameState.Status.OGRE) {
            return e(HandEnd, {gameState: gameState});
        }
        check(false, 'Unrecognized game status: ' + gameState.status);
    }

    // This will re-render the whole app when the game state changes.
    componentDidMount() { this.props.events.on('update', this.forceUpdate); }
}

function FoldButton(props) {
    function handleChange(event) {
        props.events.emit('update:active', !event.target.checked);
    }
    return e('div', {className: 'checkbox'}, [
            e('span', {key: 'label', className: 'checkbox-label'}, 'Fold: '),
            e('input', {
                key: 'checkbox',
                className: 'fold-button',
                name: 'fold',
                type: 'checkbox',
                onChange: handleChange,
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
    function handleInputBox(event) {
        var text = event.target.value;
        var bet = text.length === 0 ? 0 : parseInt(text);
        if (!isNaN(bet)) {
            tryUpdateBet(bet);
        }
    };
    var placeBetButtons = e('div', {className: 'bet'}, [
            e('span', {key: 'current-bet'}, 'Bet: ' + playerState.betSize),
            e('span', {className: 'betAmount', key: 'update-buttons'},
                [e('button', {
                    className: 'betButton',
                    key: '+2',
                    onClick: tryUpdateBet.bind(null, playerState.betSize + 2)}, '+2'),
                e('button', {
                    className: 'betButton',
                    key: '+4',
                    onClick: tryUpdateBet.bind(null, playerState.betSize + 4)}, '+4'),
                e('button', {
                    className: 'betButton',
                    style: {background: 'red', color: 'green'},
                    key: 'all_in',
                    onClick: tryUpdateBet.bind(null, player.stackSize - playerState.amountInPot)}, 'JAM!!!'),
                e('input', {onChange: handleInputBox, value: playerState.betSize, key: 'input'})])
            ]);
    return playerState.active ? placeBetButtons : null;
}
