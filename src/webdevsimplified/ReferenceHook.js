import React, { useRef, useState, useEffect } from "react";

export const ReferenceHook = () => {
  const countRef = useRef(0); // object with .current property
  const inputRef = useRef();
  const prevName = useRef("");

  const [name, setName] = useState("");

  useEffect(() => {
    countRef.current = countRef.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>

      <div>
        My name is {name} and was {prevName.current}
      </div>
      <div>I rendered {countRef.current} times</div>
    </>
  );
};
