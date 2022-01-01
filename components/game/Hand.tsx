import Card from "./Card";

function Hand(cards) {
  return (
    <div className="card-grid">
      <ul className="card-grid__list">
        {cards.map((card: any)=>(<Card card={card} />))}
      </ul>
    </div>
  );
}

export default Hand;
