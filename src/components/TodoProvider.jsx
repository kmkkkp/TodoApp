import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialContext = {
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  modifyTodo: () => {},
};

export const TodoContext = createContext(initialContext);

export default function TodoProvider({ children }) {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todoList, setTodoList] = useState(savedTodos);
  const addTodo = ({ text, color }) => {
    setTodoList([...todoList, { key: uuidv4(), text, color }]);
  };
  const deleteTodo = (key) => {
    setTodoList(todoList.filter((todo) => todo.key !== key));
  };

  const modifyTodo = (key, newText) => {
    const modifiedTodo = todoList.map((todo) => {
      if (todo.key === key) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodoList(modifiedTodo);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo, modifyTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  return context;
}
