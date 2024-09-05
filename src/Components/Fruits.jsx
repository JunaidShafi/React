import Fruit from "./Fruit.jsx";
export default function Fruits() {
  // const fruits = ["apple", "mango", "banana", "pineapple"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "a",
    },
    { name: "Mango", price: 5, emoji: "b" },
  ];
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ol>
    </div>
  );
}
