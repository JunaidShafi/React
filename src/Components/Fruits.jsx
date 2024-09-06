import Fruit from "./Fruit";
export default function Fruits() {
  // const fruits = ["apple", "mango", "banana", "pineapple"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "a",
      availibity: true,
    },
    {
      name: "Mango",
      price: 5,
      emoji: "b",
      availibity: false,
    },
  ];
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            availibity={fruit.availibity}
          />
        ))}
      </ol>
    </div>
  );
}
