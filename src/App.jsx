import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div style={{ alignContent: "center", justifyContent: "center" }}>
        <h1>Todo App</h1>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
