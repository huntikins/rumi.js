import { Deck, Round } from "../../interfaces";

class PlayerClass {
    id: string;
    uid: string;
    username: string;
    hand: Deck[];
    score: number;
    turn: boolean;
    icon: string;
    isBuying: boolean;
    discardNeeded: boolean;

    constructor(id: string, username: string, icon: string, uid: string){
        this.id= id;
        this.uid = uid
        this.username= username;
        this.hand= [];
        this.score= 0;
        this.turn= false;
        this.icon= icon;
        this.isBuying= false;
        this.discardNeeded= false;
    }

    /**
     * Removes card from player hand
     * @param card_id id of card to discard
     */
    discard(card_id: string){
        // Discard 
    }

    /**
     * Adds card from discard pile to player hand
     * @param card_id Card to be purchased
     */
    buy(card_id: string){
       // Buy card from player
    }
    /**
     * Check wether cards are able to be played (in order + matching parameters of round)
     * @param cards Array of cards containing a set or a run
     * @param type Either a set (0) or a run (1)
     * @param total How many sets or runs
     */
    evaluateCards(cards: Deck[], type: number){
        // Add passing rules here
    }

    /**
     * Play approved sets or runs
     * @param cards Array of sets and runs to go down with
     * @param round Information about current round 
     */
    playCards(cards: Array<Deck[]>, round: Round){
        // Move cards out of players hand and into the board
    }

}

export default PlayerClass;