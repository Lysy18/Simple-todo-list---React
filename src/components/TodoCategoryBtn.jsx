const TodoCategoryBtn = ({ children, ...props }) => {
  let nameC = children[1];
  let iC = children[0];
  return (
    <li>
      <button {...props}>
        <i className={iC}></i>
        <div className="liChildrenConatainer">{nameC}</div>
      </button>
    </li>
  );
};

export default TodoCategoryBtn;
