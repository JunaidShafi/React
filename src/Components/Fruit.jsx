export default function Fruit({ name, price, availibity }) {
  return (
    <>
      <ul>
        <li>
          {name} {price} {availibity ? "" : "Soldout"}
        </li>
      </ul>
    </>
  );
}
