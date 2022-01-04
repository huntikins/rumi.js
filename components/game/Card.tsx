import Image from "next/image";

function Card({card, type}: any){
    const height = type == 'player' ? 100 : 50;
    const width = type == 'player' ? 70 : 35;

    const img = type == 'player' ? card.front : card.img

    return (
        <li className="card-grid__list--item px-2">
            <Image src={img} alt={card.alt} width={width} height={height}/>
        </li>
    )
}

export default Card;