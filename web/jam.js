var e = React.createElement;

class Card extends React.Component {
    render() {
        return e('div', null, this.props.rank + ' of ' + this.props.suit);
    }
}

class CardList extends React.Component {
    render() {
        var els = [];
        for (var i = 0; i < this.props.cards.length; ++i) {
            els.push(e(
                Card,
                Object.assign({key: 'card-' + i}, this.props.cards[i])));
        }
        return e('div', null, els);
    }
}

// Stateful component to modify the amount a player has bet.
class Bet extends React.Component {
    render() {
        var state = this.props.state;
        var player = this.props.player;
        function updateBet(bet) {
            state.set('bet', Math.max(0, Math.min(player.stack, bet)));
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

// Stateless component to render 
class PlayerPanel extends React.Component {
    render() {
        var props = this.props;
        var els = [
            e('div', {key: 'stack'}, 'Stack: ' + props.stack),
        ];
        if (props.amountInPot !== undefined) {
            els.push(
                e('div', {key: 'invested'}, 'Amount in pot: ' + props.amountInPot));
        }
        return e('div',  {className: 'player'}, els);
    }
}

// A stateful component viewing all of the freezer tree.
class PlayerBetPanel extends React.Component {
    render() {
        var props = this.props;
        return e('div', null, [
                e(Bet, {state: props.state, player: props.state.playerState, key: 'bet'}),
                e(CardList, {cards: props.state.cards, key: 'cards'}),
                e(PlayerPanel, Object.assign({key: 'player'}, props.state.playerState)),
            ]);
    }
}
