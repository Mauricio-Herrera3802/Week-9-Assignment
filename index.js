// WAR Game
//
// Create a class Card to create the suit and the rank for each card
//
class Card {
    constructor(rank,suit) {
        this.suit = suit;
        this.rank = rank;
    }
}

//
// Create a class Player to keep the player's name, score and the player's hand for the game
//
class Player {
    constructor(num) {
        this.name = `Player${num}`;
        this.score = 0;
        this.hand = []
    }
}

//
// Create a class Game to generate the deck as an array, to store the players in an array, and the name of the winner 
//
class Game {
    constructor() {
        this.deck = [];
        this.winner = null; //when a winner is selected, define it here
        this.players = []; //array of 2 players;
    }

    makeDeck() {
        //create a deck of 13 ranks, 4 suits and 52 cards    
        let ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        let suits = ['❤️','🗡️','🍀','💎']
    
        // loop for each suit to create the cards in an array
        //
        for (let suit of suits) {
            for (let x = 0; x < ranks.length; x++) {
                let card = new Card(ranks[x],suit);
                this.deck.push(card);
            }
        }
    
        // shuffle the cards
        //
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
        // set the ranking to test each card against the other player's card
        //
        let ranking = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

        // for loop to go throught the lenth of the hand of each player until all the cards are played
        // used the indexOf method to determine the higher card and 1 to the score of the player winning the hand
        //
        for (let i = 0; i < war.players[0].hand.length; i++) {
            if (ranking.indexOf(war.players[0].hand[i].rank) < ranking.indexOf  (war.players[1].hand[i].rank)) {
            war.players[1].score ++;
            }  else if (ranking.indexOf(war.players[0].hand[i].rank) > ranking.indexOf(war.players[1].hand[i].rank)) {
            war.players[0].score ++;
            } else if (ranking.indexOf(war.players[0].hand[i].rank) ===ranking.indexOf(war.players[1].hand[i].rank)) {
          }
     }
    }
    // Method to determine the winner from the 2 players by comparing the scores of each player
    //
    determineWinner() {
        if (war.players[0].score > war.players[1].score) {
            war.winner = war.players[0].name; }  
        else if (war.players[0].score < war.players[1].score) {
             war.winner = war.players[1].name; 
        }  else { war.winner = 'There is no Winner; it\'s a tie'; } 

        console.log(`Score for ${war.players[0].name} is ${war.players[0].score}; Score for ${war.players[1].name} is ${war.players[1].score}.`)
console.log(`The winner is: ${war.winner}.`);
    }
  }

// create the war game using the class Game
// call the methods to make the deck, deal the cards and play the game until all the cards are played by each player; then call the method determineWinner to display the score for each player and display the name of the winner
//
let war = new Game();
war.makeDeck();
war.dealCards();
war.playGame();
war.determineWinner();

