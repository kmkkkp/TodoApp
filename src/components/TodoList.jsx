import { TodoItem } from "./TodoItem";
import { useTodo } from "./TodoProvider";
// 여기다가 useState 주고, modifyTodo
export function TodoList() {
  const { todoList } = useTodo();

  return (
    <ul style={{ textAlign: "center", padding: 0 }}>
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.key}
          id={todo.key}
          text={todo.text}
          color={todo.color}
        />
      ))}
    </ul>
  );
}
// 삭제 버튼이라, todoList를 건드려야함,
