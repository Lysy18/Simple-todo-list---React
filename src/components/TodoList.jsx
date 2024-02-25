import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todoList, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todoList];
    setTodos(newTodos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todoList.map((todo) => {
      console.log(todo.id, id);
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    let newTodos = [];
    todoList.map((todo) => {
      console.log();
      if (id !== todo.id) {
        // newTodos = newTodos.push(oldTodos[i]);
        newTodos = [...newTodos, todo];
        console.log(newTodos);
      }
    });
    setTodos(newTodos)
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todoList={todoList} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
