import { useState } from "react";
import PropTypes from "prop-types";
const AddCategoryPopup = ({ onAddCategory, onShadowAddCategoryPopup }) => {
  // let [isAddCategory, setIsAddCategory] = useState(true);
  let [newCategory, setNewCategory] = useState("");
  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };
  const handleSaveAddedCategory = (e) => {
    e.preventDefault();
    if (newCategory !== "") {
      onAddCategory(newCategory);
      setNewCategory("");
      // setIsAddCategory(!isAddCategory);
      onShadowAddCategoryPopup();
    }
  };
  return (
    <div className="shadow">
      <div className="addCategoryPopup">
        <div
          className="addCategoryPopup-close"
          onClick={onShadowAddCategoryPopup}
        >
          <i className="fa-solid fa-x"></i>
        </div>
        <form onSubmit={handleSaveAddedCategory}>
          <input type="text" onChange={handleChange} value={newCategory} />
          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
};

AddCategoryPopup.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategoryPopup;
