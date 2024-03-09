import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoBtn from "./TodoBtn";

const TodoList = () => {
  const [todoList, setTodos] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("work");
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todoList];
    setTodos(newTodos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todoList.map((todo) => {
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
      if (id !== todo.id) {
        newTodos = [...newTodos, todo];
      }
    });
    setTodos(newTodos);
  };

  const saveEditTodo = (editTodo, todoList) => {
    let newTodos = [];
    todoList.map((todo) => {
      if (editTodo.id !== todo.id) {
        newTodos = [...newTodos, todo];
      } else {
        newTodos = [
          ...newTodos,
          {
            id: editTodo.id,
            text: editTodo.value,
            category: editTodo.category,
          },
        ];
      }
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <TodoBtn onClick={() => handleCategory("home")}>Home</TodoBtn>
        <TodoBtn onClick={() => handleCategory("work")}>Work</TodoBtn>
        <TodoBtn onClick={() => handleCategory("school")}>School</TodoBtn>
      </ul>
      <TodoForm onSubmit={addTodo} category={selectedCategory} />
      <Todo
        todoList={todoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        saveEditTodo={saveEditTodo}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default TodoList;
