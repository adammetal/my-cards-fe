import { Suspense, useEffect, useState } from "react";
import Placeholder from "./Placeholder";
import wrapPromise from "../../wrap-promise";
import Meta from "./Meta";

import "./Card.css";
import SubHeader from "./SubHeader";

const fetchCardMeta = (id, { signal }) =>
  fetch(`/api/cards/${id}/meta`, { signal })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return null;
    })
    .catch((err) => {
      console.log("aborted");
      console.log(err);
      return null;
    });

function Card(props) {
  const { name, count, id } = props;
  const [resource, setResource] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const promise = fetchCardMeta(id, controller);

    setResource(wrapPromise(promise));

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div className="Card">
      <header>
        <h1>
          <select defaultValue={count}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {name}
        </h1>
        {resource && (
          <Suspense fallback="Loading...">
            <SubHeader resource={resource} />
          </Suspense>
        )}
      </header>
      {resource && (
        <Suspense fallback={<Placeholder loading />}>
          <Meta resource={resource} />
        </Suspense>
      )}
    </div>
  );
}

export default Card;
