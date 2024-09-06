import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  function handleClick() {
    setCount(count + incrementBy);
  }
  function handleDecrement() {
    setCount(count - incrementBy);
  }
  return (
    <>
      <h1>Count Value is:{count}</h1>
      <h1>We are increment the value by {incrementBy}</h1>
      <button onClick={handleClick}> Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={increaseIncrement}>Increasing the Increment by</button>
      <button onClick={decreaseIncrement}>Decreasing the Increment by</button>
    </>
  );
}
