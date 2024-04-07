import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ onAddCategory }) => {
  let [isAddCategory, setIsAddCategory] = useState(true);
  let [newCategory, setNewCategory] = useState("");

  // const handleAddCategory = () => {
  //   // setIsAddCategory((addPosi) => !addPosi);
  //   console.log(isAddCategory);
  // };
  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };
  const handleSaveAddedCategory = (e) => {
    e.preventDefault();
    if (newCategory !== "") {
      onAddCategory(newCategory);
      setNewCategory("");
      setIsAddCategory(!isAddCategory);
    }
  };
  return (
    <>
      {isAddCategory ? (
        <div className="addCategoryBtn">
          <button onClick={() => setIsAddCategory((newAddPosi) => !newAddPosi)}>
            Add Category
          </button>
        </div>
      ) : (
        <div className="addCategoryPopup">
          <form onSubmit={handleSaveAddedCategory}>
            <input type="text" onChange={handleChange} value={newCategory} />
            <button type="submit">Add Category</button>
          </form>
        </div>
      )}
    </>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategory;
