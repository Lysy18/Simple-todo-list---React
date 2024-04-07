import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoCategoryBtn from "./TodoCategoryBtn";
import AddCategory from "./AddCategory";
const TodoList = () => {
  const [todoList, setTodos] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("work");
  let [categoryArr, setCategoryArr] = useState(["work", "home", "school"]);
  let [addCategoryPopup, setAddCategoryPopup] = useState(false);
  const handleCategory = (category) => {
    console.log(category.categoryName);
    setSelectedCategory(category.categoryName);
  };
  const addTodo = (todo) => {
    console.log(todo);
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

  const handleAddCategory = (newCategory) => {
    setCategoryArr([...categoryArr, newCategory]);
  };

  return (
    <>
      {addCategoryPopup ? <div className="shadow"></div> : null}

      <div className="mainContainer">
        <div className="mainContainer-category">
          <ul>
            {/* <TodoBtn onClick={() => handleCategory("home")}>
            <i className="fa-solid fa-house"></i>Home
          </TodoBtn>
          <TodoBtn onClick={() => handleCategory("work")}>
            <i className="fa-solid fa-briefcase"></i>Work
          </TodoBtn>
          <TodoBtn onClick={() => handleCategory("school")}>
            <i className="fa-solid fa-book-open"></i>School
          </TodoBtn> */}
            {categoryArr.map((categoryName, index) => (
              <TodoCategoryBtn
                key={index}
                onClick={() => handleCategory({ categoryName })}
              >
                {/* <i className="fa-solid fa-book-open"></i> */}
                {categoryName}
              </TodoCategoryBtn>
            ))}
            {/* <li onClick={setIsAddCategory(!isAddCategory)}></li> */}
          </ul>
          <AddCategory onAddCategory={handleAddCategory} />
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
    </>
  );
};

export default TodoList;
