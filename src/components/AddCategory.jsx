const AddCategory = ({ onShadowAddCategoryPopup }) => {
  return (
    <>
      <div className="addCategoryBtn">
        <button onClick={onShadowAddCategoryPopup}>Add Category</button>
      </div>
    </>
  );
};

export default AddCategory;
