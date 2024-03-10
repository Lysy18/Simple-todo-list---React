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
    <div className="mainContainer">
      <div className="mainContainer-category">
        <ul>
          <TodoBtn onClick={() => handleCategory("home")}>
            <i className="fa-solid fa-house"></i>Home
          </TodoBtn>
          <TodoBtn onClick={() => handleCategory("work")}>
            <i className="fa-solid fa-briefcase"></i>Work
          </TodoBtn>
          <TodoBtn onClick={() => handleCategory("school")}>
            <i className="fa-solid fa-book-open"></i>School
          </TodoBtn>
        </ul>
      </div>
      <div className="mainContainer-todoContainer">
        <h1>To-Do</h1>
        <TodoForm onSubmit={addTodo} category={selectedCategory} />
        <div className="mainContainer-todoContainer-todo">
          <Todo
            todoList={todoList}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            saveEditTodo={saveEditTodo}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
