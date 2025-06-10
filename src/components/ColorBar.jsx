// ColorBar.js
export function ColorBar({ setColor }) {
  const colors = ["white", "yellow", "blue", "red"];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setColor(color)}
          style={{
            backgroundColor: color,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            margin: "0 5px",
          }}
        />
      ))}
    </div>
  );
}
