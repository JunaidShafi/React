export default function Message() {
  function hiThere() {
    console.log("Button Clicked");
  }
  return (
    <>
      <button onClick={hiThere}> Click to get a message</button>
    </>
  );
}
