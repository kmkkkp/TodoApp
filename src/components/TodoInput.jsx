import { useRef } from "react";

export function TodoInput({ color, onAdd }) {
  const inputRef = useRef(); //input use ref 쓰면되지않나?

  const handleAdd = () => {
    const value = inputRef.current.value;
    if (value) {
      onAdd(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <input
        ref={inputRef}
        style={{ backgroundColor: color, color: "black" }}
      />
      <button onClick={handleAdd}>입력</button>
    </div>
  );
}
