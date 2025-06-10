// TodoList.js
import { TodoItem } from "./TodoItem";

export function TodoList({ todoList }) {
  return (
    <ul style={{ textAlign: "center", padding: 0 }}>
      {todoList.map((todo, index) => (
        <TodoItem key={index} text={todo[0]} color={todo[1]} />
      ))}
    </ul>
  );
}
