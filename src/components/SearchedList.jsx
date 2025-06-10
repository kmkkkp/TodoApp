import { TodoItem } from "./TodoItem";
import { useTodo } from "./TodoProvider";
export function SearchedList({ searchText }) {
  const { todoList } = useTodo();

  const filtered = todoList.filter(({ text }) =>
    text.toLowerCase().includes(searchText.toLowerCase())
  );

  if (!searchText) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>검색 결과</h2>
      {filtered.length === 0 ? (
        <p>일치하는 항목이 없습니다.</p>
      ) : (
        <ul style={{ padding: 0 }}>
          {filtered.map(({ key, text, color }, idx) => (
            <TodoItem id={key} text={text} color={color} />
          ))}
        </ul>
      )}
    </div>
  );
}
