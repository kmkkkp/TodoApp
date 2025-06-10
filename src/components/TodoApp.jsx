import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { ColorBar } from "./ColorBar";
import { TodoList } from "./TodoList";
import { SearchedList } from "./SearchedList";
import { TodoSearchInput } from "./TodoSearchInput";

export default function TodoApp() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [color, setColor] = useState("yellow");
  const [todoList, setTodoList] = useState(savedTodos);
  const [searchText, setSearchText] = useState("");

  const handleAddTodo = (text) => {
    setTodoList([...todoList, [text, color]]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <TodoInput color={color} onAdd={handleAddTodo} />
      <ColorBar setColor={setColor} />
      <h1>Todo Items</h1>
      <TodoList todoList={todoList} />
      <TodoSearchInput searchText={searchText} setSearchText={setSearchText} />
      <SearchedList todoList={todoList} searchText={searchText} />
    </div>
  );
}
