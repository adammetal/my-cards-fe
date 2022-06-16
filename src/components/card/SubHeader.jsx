function SubHeader({ resource }) {
  const meta = resource.read();

  if (!meta) {
    return <h2>Unknow</h2>;
  }

  const details = meta.cardDetails;

  return (
    <h2>
      {details["Types:"]} [{details["Converted Mana Cost:"]}]
    </h2>
  );
}

export default SubHeader;
