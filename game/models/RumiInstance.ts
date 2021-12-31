import { Card, Deck, Player, Round } from "../../interfaces";
import GameDeck from "./GameDeck";
class RumiInstance {
    id: string;
    players: Player[];
    round: number;
    active: boolean;
    currentPlayer: {
        isBuying: boolean,
        discardNeeded: boolean,
        player_id: string
    }
    game_name: string;
    cards: Card[];
    discards: Card[];
    goal: Round;
    host: string;
    host_name: string;
    host_icon: string;

    constructor(game_name: string, host: {id:string, username: string, icon: string}){
        this.id= '' // Firestore ID
        this.players= [];
        this.round= 0;
        this.active= false;
        this.currentPlayer= {
            isBuying: false,
            discardNeeded: false,
            player_id: ''
        };
        this.game_name= game_name;
        this.cards = []
        this.discards = []
        this.goal= {
            round: 1,
            sets: 2,
            runs: 0,
            cardCount: 10,
            discard: true,
        };
        this.host = host.id;
        this.host_name = host.username;
        this.host_icon = host.icon;
    }

    /**
     * Game Instance Functions
     */
    gameInit() {
        // Create new game instance
        const playerCount = this.players.length; 
        const game = new GameDeck(playerCount);
        // Create game cards
        const deck:Deck[] = [];
        // populate array with decks based on player count
        for( let i:number = 0;i < game.deckCount(playerCount); i++ ){
            let count = i+1;
            const cards = game.genDeck(count.toString());
            deck.push(...cards);
        }
    }
    turnStart(){
        // Start player turn
    }
    turnEnd(){
        // Evaluate end of turn
    }

}

export default RumiInstance;