import { Suspense } from "react";
import Deck from "./components/deck";
import wrapPromise from "./wrap-promise";

import "./App.css";

const fetchCards = async () => (await fetch("/api/cards")).json();

const cardsResource = wrapPromise(fetchCards());

function App() {
  return (
    <main>
      <Suspense fallback="Loading...">
        <Deck cardsResource={cardsResource} />
      </Suspense>
    </main>
  );
}

export default App;
