var e = React.createElement;
////////// Utility functions //////////
function check(condition, message) {
    if(!condition) throw new Error(message);
}

////////// DATA functions //////////
function BuildPlayerView(gameState, playerId) {

}


////////// StateLESS components //////////
// A card. Can be hidden, or reveal a rank + a suit.
function Card(props) {
    if (props.hidden) {
        return e('div', {className: 'card'}, '?? of ??');
    }
    return e('div', {className: 'card'}, props.rank + ' of ' + this.props.suit);
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

// The board. Renders 5 cards, and displays which street we are on (flop, river,
// etc.).
function Board(props) {
    var cards = props.state.cards;
    check(cards.length == 5, 'Must have 5 cards on the board: ' + cards);
    for (var firstHidden = 0;  firstHidden < 5; ++firstHidden) {
        if (cards[firstHidden].hidden) {
            break;
        }
    }
    for (var i = firstHidden; i < 5; ++i) {
        check(
            cards[i].hidden,
            'All cards after firstHidden must be hidden: ' + firstHidden);
    }
    var street = 'Pre-Flop';
    if (firstHidden == 3) { street = 'Flop'; }
    if (firstHidden == 4) { street = 'Turn'; }
    if (firstHidden == 5) { street = 'River'; }
    return e('div', {className: 'board'}, [
        e('div', {className: 'street'}, 'Street: ' + street),
        e(CardList, {cards: props.state.cards, key: 'cards'}),
    ]);
}

// The player's information about the current hand (cards + bet in the pot).
// Cards would be hidden for players who aren't the logged in player -- but
// the server has to handle this view.
function PlayerPanel(props) {
    var player = props.player;

    return e('div',  {className: 'player'}, [
        // Game-specific info.
        e('div', {key: 'name', className: 'name'}, player.name),
        e('div', {key: 'stack', className: 'stack'}, player.stack),
        // Hand-specific info.
        e(CardList, {key: 'cards', cards: player.cards),
        e('div', {key: 'pot', className: 'amountInPot'}, player.amountInPot),
        e('div', {key: 'folded', className: 'folded'}, (
            player.folded ? 'yes' : 'no')),
    ]);
}


// The panel for the logged-in user aka the BBQ. The UI allows the BBQ player
// to place a bet, and also renders his/her cards. It also gives words of
// encouragement.
function LoggedInPlayerPanel(props) {
    return e('div', null, [
            e(SpecialMessage, {message: 'You are a real BBQ with that hand!'}),
            e(PlayerPanel, Object.assign({key: 'player'}, props.state.playerState)),
            e(Bet, {state: props.state, player: props.state.playerState, key: 'bet'}),
    ]);
}

////////// StateFUL Components //////////

// UI to get the user's bet. TODO add fun sound effects.
class Bet extends React.Component {
    render() {
        var state = this.props.state;
        var player = this.props.player;
        function updateBet(bet) {
            // Using .now() on the update, in case the user is typing.
            state.set('bet', Math.max(0, Math.min(player.stack, bet))).now();
        }
        var handleInputBox = (function(event) {
            var text = event.target.value;
            if (text.length === 0) {
                updateBet(0);
            }
            var bet = parseInt(text);
            if (!isNaN(bet)) {
                updateBet(bet);
            }
        }).bind(this);
        var placeBetButtons = e('div', {className: 'bet'}, [
                e('span', {key: 'current-bet'}, 'Bet: ' + state.bet),
                e('span', {className: 'betAmount', key: 'update-buttons'},
                    [e('button', {
                        className: 'betButton',
                        key: '+2',
                        onClick: updateBet.bind(null, state.bet + 2)}, '+2'),
                    e('button', {
                        className: 'betButton',
                        key: '+4',
                        onClick: updateBet.bind(null, state.bet + 4)}, '+4'),
                    e('button', {
                        className: 'betButton',
                        style: {background: 'red', color: 'green'},
                        key: 'all_in',
                        onClick: updateBet.bind(null, player.stack)}, 'JAM!!!'),
                    e('input', {onChange: handleInputBox, value: state.bet, key: 'input'})])
                ]);
        return player.folded ? null : placeBetButtons;
    }
}
