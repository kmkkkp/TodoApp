import React, { useState } from "react";
import { useTodo } from "./TodoProvider";
export function TodoItem({ id, text, color, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const { deleteTodo, modifyTodo } = useTodo();
  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: color,
        color: "black",
      }}
    >
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        ></input>
      ) : (
        text
      )}
      <button onClick={() => deleteTodo(id)}>삭제</button>
      <button
        onClick={() => {
          setIsEditing((prev) => !prev);
          isEditing ? modifyTodo(id, newText) : null;
        }}
      >
        수정
      </button>
    </li>
  ); // 여기다가 useEffect text 수정해서 , 넘겨주기
}
