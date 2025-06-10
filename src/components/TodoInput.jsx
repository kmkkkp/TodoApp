import { useRef, useContext } from "react";
import { useTodo } from "./TodoProvider";
export function TodoInput({ color }) {
  const inputRef = useRef(); //input use ref 쓰면되지않나?
  const context = useTodo();
  const handleAdd = () => {
    const value = inputRef.current.value;
    if (value) {
      context.addTodo({ text: value, color });
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
