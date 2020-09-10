import React from "react";
import useLocalStorage from "./useLocalStorage";

export const OwnHook = () => {
  const [name, setName] = useLocalStorage("name", "hello");
  const [age, setAge] = useLocalStorage("age", 18);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </>
  );
};
