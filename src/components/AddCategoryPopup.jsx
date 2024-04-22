import { useState } from "react";
import PropTypes from "prop-types";
const AddCategoryPopup = ({ onAddCategory, onShadowAddCategoryPopup }) => {
  // let [isAddCategory, setIsAddCategory] = useState(true);
  let [newCategory, setNewCategory] = useState("");
  let [newCategoryImage, setNewCategoryImage] = useState("");
  let [iArr] = useState([
    "fa-solid fa-house",
    "fa-solid fa-briefcase",
    "fa-solid fa-book-open",
    "fa-solid fa-check",
    "fa-solid fa-magnifying-glass",
    "fa-solid fa-user",
    "fa-solid fa-phone",
    "fa-solid fa-star",
    "fa-solid fa-envelope",
    "fa-solid fa-location-dot",
    "fa-solid fa-heart",
    "fa-solid fa-music",
    "fa-solid fa-cloud",
    "fa-solid fa-pen",
    "fa-solid fa-hippo",
    "fa-solid fa-face-smile",
    "fa-solid fa-calendar-days",
    "fa-solid fa-paperclip",
    "fa-solid fa-bell",
    "fa-solid fa-car",
    "fa-solid fa-ghost",
    "fa-solid fa-mug-hot",
    "fa-solid fa-gift",
    "fa-solid fa-book",
    "fa-solid fa-plane",
    "fa-solid fa-plus",
    "fa-solid fa-fire",
  ]);

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };
  const handleChangeImage = (e) => {
    setNewCategoryImage(e.currentTarget.getAttribute("data-value"));
    const listOfImg = document.querySelectorAll(".categoryImg");
    for (const imgEle of listOfImg) {
      imgEle.classList.remove("categoryImg-active");
    }
    e.currentTarget.classList.add("categoryImg-active");
  };
  const handleSaveAddedCategory = (e) => {
    e.preventDefault();
    if (newCategory !== "") {
      onAddCategory(newCategoryImage, newCategory);
      setNewCategory("");
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
          <input
            type="text"
            onChange={handleChange}
            value={newCategory}
            className="categoryInput"
          />
          <button className="categoryButton" type="submit">
            Add Category
          </button>
          <div className="categoryImg-container">
            {iArr.map((iElement) => (
              <div
                key={iElement}
                data-value={iElement}
                onClick={handleChangeImage}
                className="categoryImg"
              >
                <i className={iElement}></i>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

AddCategoryPopup.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategoryPopup;
