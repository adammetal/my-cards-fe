import Card from "../card";
import AddCard from "../add-card";
import CardLoading from "../card-loading";

import "./Deck.css";

function Deck() {
  return (
    <div className="Deck">
      <header className="title">
        <button>
          <h1>Merfolk Aggro</h1>
        </button>
      </header>
      <AddCard />
      <CardLoading />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Deck;
