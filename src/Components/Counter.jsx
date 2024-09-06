import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Count Value is:{count}</h1>
      <button onClick={handleClick}> Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
