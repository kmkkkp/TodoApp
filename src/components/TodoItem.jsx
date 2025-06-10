export function TodoItem({ text, color }) {
  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: color,
        color: "black",
      }}
    >
      {text}
    </li>
  );
}
