function Card({card}: any){
    return (
        <li className="card-grid__list--item">
            <img src={card.img} alt={card.alt} />
        </li>
    )
}

export default Card;