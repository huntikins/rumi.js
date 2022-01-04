import { Card, Deck, Player, Round } from "../../interfaces";
import GameDeck from "./GameDeck";
import PlayerClass from "./Player";
import roundSchema from "./Round";
class RumiInstance {
    id: string;
    players: Player[];
    player_count: number;
    round: number;
    active: boolean;
    currentPlayer: {
        isBuying: boolean,
        discardNeeded: boolean,
        player_id: string
    }
    game_name: string;
    cards: Deck[];
    discards: Card[];
    goal: Round;
    host: string;
    host_name: string;
    host_icon: string;

    constructor(player_count: number, game_name: string, host: {id:string, username: string, icon: string}){
        this.id= '' // Firestore ID
        this.players= [];
        this.player_count=player_count
        this.round= 0;
        this.active= false;
        this.currentPlayer= {
            isBuying: false,
            discardNeeded: false,
            player_id: ''
        };
        this.game_name= game_name;
        this.cards = [];
        this.discards = []
        this.goal = roundSchema[0];
        this.host = host.id;
        this.host_name = host.username;
        this.host_icon = host.icon;
    }

}

export default RumiInstance;