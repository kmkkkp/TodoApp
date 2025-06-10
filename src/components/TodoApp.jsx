import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { ColorBar } from "./ColorBar";
import { TodoList } from "./TodoList";
import { SearchedList } from "./SearchedList";
import { TodoSearchInput } from "./TodoSearchInput";
import TodoProvider from "./TodoProvider";

export default function TodoApp() {
  const [color, setColor] = useState("yellow");
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <TodoProvider>
        <TodoInput color={color} />
        <ColorBar setColor={setColor} />
        <h1>Todo Items</h1>
        <TodoList
        // todoList={todoList}
        // onDelete={deleteTodo}
        // onModify={modifyTodo}
        />
        <TodoSearchInput
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <SearchedList
          // todoList={todoList}
          searchText={searchText}
          // onDelete={deleteTodo}
        />
      </TodoProvider>
    </div>
  );
}
