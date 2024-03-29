import Card from "./Card";

function Hand({cards, type, selectCard}:any) {

  return (
    <div className="card-grid">
      <ul className="card-grid__list flex px-2 m-0 py-0">
        {cards && cards.map((card: any, index:number)=>(<Card selectCard={selectCard} card={card} type={type} key={index + card}/>))}
      </ul>
    </div>
  );
}

export default Hand;
