function Hello({ person }) {
  return (
    <h1>
      {person.name} {person.message} {person.seatNumbers}
    </h1>
  );
}
export default Hello;
