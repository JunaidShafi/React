import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ name: "", lastname: "" });

  return (
    <>
      <form>
        <input
          onChange={(e) => setName({ name: e.target.value, lastname: "" })}
          type="text"
          value={name.name}
        />
        <br />
        <br />
        <input
          onChange={(e) => setName({ name: "", lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
      </form>
    </>
  );
}
