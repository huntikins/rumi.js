import Image from "next/image";

function Card({card, type}: any){
    const height = type == 'player' ? 100 : 50;
    const width = type == 'player' ? 70 : 35;

    return (
        <li className="card-grid__list--item px-2">
            <Image src={card.front} alt={card.alt} width={width} height={height}/>
        </li>
    )
}

export default Card;