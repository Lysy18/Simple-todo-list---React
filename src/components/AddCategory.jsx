// import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ onShadowTest }) => {
  // const handleAddCategory = () => {
  //   // setIsAddCategory((addPosi) => !addPosi);
  //   console.log(isAddCategory);
  // };

  const test = () => {
    onShadowTest;
  };
  return (
    <>
      <div className="addCategoryBtn">
        <button onClick={onShadowTest}>Add Category</button>
      </div>
    </>
  );
};

// AddCategory.propTypes = {
//   onAddCategory: PropTypes.func.isRequired,
// };

export default AddCategory;
