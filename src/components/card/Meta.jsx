import Placeholder from "./Placeholder";

function Meta(props) {
  let meta = props.resource.read();

  if (meta === null) {
    return <Placeholder />;
  }

  const details = meta.cardDetails;

  return (
    <div className="body">
      <div className="image">
        <img src={meta.cardImageSrc} alt={meta.cardTitle} />
      </div>
      <div className="details">
        <div>{details["Card Text:"]}</div>
        <div className="pt">{details?.["P/T:"]}</div>
      </div>
    </div>
  );
}

export default Meta;
