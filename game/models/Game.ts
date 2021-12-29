import Card from "./Card";

class Game {
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
    users: Player[];
    host: string;
    host_name: string;
    host_icon: string;

    constructor(id: string, game_name: string, host: {id:string, username: string, icon: string}){
        this.id=id // WebSocket ID
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
        this.users= [];
        this.host = host.id;
        this.host_name = host.username;
        this.host_icon = host.icon;
    }

    /**
     * Game Instance Functions
     */
    gameInit() {
       // Create new game instance 
    }
    turnStart(){
        // Start player turn
    }
    turnEnd(){
        // Evaluate end of turn
    }

}

export default Game