import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(props.category);
  const handleChange = (e) => {
    setInput(e.target.value);
    setCategory(props.category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(props.category);
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      category: category,
    });
    setInput("");
  };
  return (
    <div>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </form>
      {category == "school" ? <div>school</div> : null}
      {category == "work" ? <div>work</div> : null}
      {category == "home" ? <div>home</div> : null}
    </div>
  );
};

export default TodoForm;
