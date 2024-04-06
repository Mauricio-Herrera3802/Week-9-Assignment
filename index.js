/*
    war: players share a card from top of deck, highest card wins (allow for ties)

    card class
        - suit
        - rank/value

    Deck: [] of 52 card objects

    player class
        - name
        - hand : [26 card objects]
        - winStatus (boolean)
        - score
    
    class Game

*/

class Card {
    constructor(rank,suit) {
        this.suit = suit;
        this.rank = rank;
    }
}


class Player {
    constructor(num) {
        this.name = `Player${num}`;
        this.score = 0;
        this.hand = []
    }
}


class Game {
    constructor() {
        this.deck = [];
        this.winner = null; //when a winner is selected, define it here
        this.players = []; //array of 2 players;
        this.makeDeck();
        this.dealCards();
        this.playGame();
    }

    makeDeck() {
        //create a deck of 13 ranks, 4 suits and 52 cards    
        let ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        let suits = ['❤️','🗡️','🍀','💎']
    
        for (let suit of suits) {
            for (let x = 0; x < ranks.length; x++) {
                let card = new Card(ranks[x],suit);
                this.deck.push(card);
            }
        }
    
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
      }

    dealCards() {
        //needs to give 26 cards to each player

        for (let x = 1; x <= 2; x++) {
            let player = new Player(x);
            player.hand = this.deck.splice(0,26);
            this.players.push(player);

          }
    
        //deal this.deck [] to each player
    }

    playGame() {
        for (let player of this.players) {
            console.log(`Welcome to the game ${player.name}`);
      }
    }

}

let war = new Game();
//war.makeDeck();
//war.dealCards();
let ranking = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
console.log('we just started a new game ');

console.log('p1 h1 ', war.players[0].hand[0]);
console.log('p2 h1 ', war.players[1].hand[0]);

for (let i = 0; i < war.players[0].hand.length; i++) {
    if (ranking.indexOf(war.players[0].hand[i].rank) < ranking.indexOf(war.players[1].hand[i].rank)) {
        war.players[1].score ++;
        console.log('game ', i, ' p2 wins');
    }  else if (ranking.indexOf(war.players[0].hand[i].rank) > ranking.indexOf(war.players[1].hand[i].rank)) {
        war.players[0].score ++;
        console.log('game ', i, ' p1 wins');
    } else if (ranking.indexOf(war.players[0].hand[i].rank) ===ranking.indexOf(war.players[1].hand[i].rank)) {
        console.log('game ', i, ' tie')
    }
}
console.log('p1 score ', war.players[0].score);
console.log('p2 score ', war.players[1].score);