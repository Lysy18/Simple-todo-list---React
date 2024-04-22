import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoCategoryBtn from "./TodoCategoryBtn";
import AddCategory from "./AddCategory";
import AddCategoryPopup from "./AddCategoryPopup";
const TodoList = () => {
  const [todoList, setTodos] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("work");
  let [categoryArr, setCategoryArr] = useState([
    ["fa-solid fa-briefcase", "work"],
    ["fa-solid fa-book-open", "school"],
    ["fa-solid fa-house", "home"],
  ]);

  const [addCategoryPopup, setAddCategoryPopup] = useState(false);
  // const [settingsHiden, setSettingsHiden] = useState(false);
  const handleCategory = (category) => {
    // console.log(category.categoryName);
    setSelectedCategory(category.categoryName);
  };
  const addTodo = (todo) => {
    // console.log(todo);
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

  const handleAddCategory = (newCategoryImage, newCategory) => {
    console.log("test", newCategory, newCategoryImage);
    setCategoryArr([...categoryArr, [newCategoryImage, newCategory]]);
  };

  const handleShadowAddCategoryPopup = () => {
    setAddCategoryPopup((CategoryPopup) => !CategoryPopup);
  };
  return (
    <>
      {addCategoryPopup ? (
        <>
          <AddCategoryPopup
            onAddCategory={handleAddCategory}
            onShadowAddCategoryPopup={handleShadowAddCategoryPopup}
          />
        </>
      ) : null}
      <div className="mainContainer">
        <div className="mainContainer-category settingsMobile">
          <ul>
            {categoryArr.map((categoryName, index) => (
              <TodoCategoryBtn
                key={index}
                onClick={() => handleCategory({ categoryName })}
              >
                {categoryName}
              </TodoCategoryBtn>
            ))}
            {/* <li onClick={setIsAddCategory(!isAddCategory)}></li> */}
          </ul>
          {addCategoryPopup ? null : (
            <AddCategory
              onShadowAddCategoryPopup={handleShadowAddCategoryPopup}
            />
          )}
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
