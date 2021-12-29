class Card {
    id: string;
    value: string | number;
    suit: string;
    points: number;
    front: string;
    back: string;

    constructor(id: string, value:string | number, suit:string, points:number, front:string, back:string){
        this.id= id;
        this.value= value;
        this.suit= suit;
        this.points= points;
        this.front= front;
        this.back= back;
    }
}

export default Card