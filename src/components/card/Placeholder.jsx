import "./Placeholder.css";

function Placeholder({ loading }) {
  return <div className={`Placeholder ${loading ? "loading" : ""}`} />;
}

export default Placeholder;
