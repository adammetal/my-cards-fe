import "./AddCard.css";

function AddCard() {
  return (
    <div className="AddCard">
      <header>
        <h1>Add new card</h1>
      </header>
      <div className="new-card">
        <div>
          <input placeholder="Card title" />
        </div>
        <div>
          <button>Plus</button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
