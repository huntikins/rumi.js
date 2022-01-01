import Card from "./Card";

function Hand({cards, type}:any) {
  return (
    <div className="card-grid">
      <ul className="card-grid__list flex px-2 m-0 py-0">
        {cards && cards.map((card: any)=>(<Card card={card} type={type}/>))}
      </ul>
    </div>
  );
}

export default Hand;
