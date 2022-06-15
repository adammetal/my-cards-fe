import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <header>
        <h1>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>4</option>
          </select>
          Merfolk Mistbinder
        </h1>
        <h2>Creature — Merfolk Shaman [2]</h2>
      </header>
      <div className="body">
        <div className="image">
          <img
            src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439823&type=card"
            alt="Merfolk Mistbinder"
          />
        </div>
        <div className="details">
          <div>Other Merfolk you control get +1/+1.</div>
          <div className="pt">2 / 2</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
