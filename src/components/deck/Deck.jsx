import Card from "../card";
import AddCard from "../add-card";
import CardLoading from "../card-loading";

import "./Deck.css";

function Deck({ cardsResource }) {
  const cards = cardsResource.read();

  return (
    <div className="Deck">
      <header className="title">
        <button>
          <h1>Deck Title</h1>
        </button>
      </header>
      <AddCard />
      <CardLoading />
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          count={card.count}
          id={card.id}
        />
      ))}
    </div>
  );
}

export default Deck;
