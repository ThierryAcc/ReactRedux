import React, { useRef, useState, forwardRef } from "react";
import { ReferenceHook } from "../webdevsimplified/ReferenceHook";
import { MemoHook } from "../webdevsimplified/MemoHook";
import { OwnHook } from "../webdevsimplified/OwnHook";

export const TextInputWithFocusButton = () => {
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const superHeroElement = forwardRef(null);

  const handleRefComponent = () => {
    console.log(superHeroElement);
    superHeroElement.current.changeName();
  };

  const RefComponent = () => {
    const [name, setName] = useState("Batman");
    const changeName = () => {
      setName("Bruce Wayne");
    };
    return <div>{name}</div>;
  };

  const nonFocus1 = () => {
    const [input1, setInput1] = useState("");

    const onChange = (e) => {
      setInput1(e.target.value);
      inputEl1.current.focus();
    };

    return (
      <>
        <input onChange={onChange} ref={inputEl1} value={input1} type="text" />
      </>
    );
  };
  const nonFocus2 = () => {
    const [input2, setInput2] = useState("");

    const onChange = (e) => {
      setInput2(e.target.value);
      inputEl2.current.focus();
    };

    return (
      <>
        <input onChange={onChange} ref={inputEl2} value={input2} type="text" />
      </>
    );
  };
  return (
    <>
      :::Compound:::
      <RefComponent innerRef={superHeroElement} />
      <button onClick={handleRefComponent}>Show Batmans real name!</button>
      {nonFocus1()}
      {nonFocus2()}
      <br />
      <br />
      <br />
      USEREF WITH A COUNTER:
      <ReferenceHook />
      <br />
      <br />
      MEMOHOOK TO REMEMBER A NUMBER (CACHE)
      <MemoHook />
      <br />
      <br />
      OWNHOOK
      <OwnHook />
      <br />
      <br />
    </>
  );
};
