import { useState } from "react";

import IngredientOnHand from "./IngredientOnHand";
import GenerateRecipe from "./GenerateRecipe";
const AddIngredient = () => {
  // State to store the list of ingredients
  const [list, setList] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState("");

  const addItemToTheList = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]); // Add new ingredient to the list
      setInputValue(""); // Clear input field after adding
    }
  };

  return (
    <div className="claude-container-chef">
      <div className="sub-container-claude-chef">
        <div className="input-group-claude-chef">
          <input
            type="text"
            className="input-claude-chef-ingredient"
            placeholder="e.g. oregano"
            aria-label="e.g. oregano"
            key="addIngredient"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn-claude-chef-ingredient"
            type="button"
            onClick={addItemToTheList}
          >
            + Add Ingredient
          </button>
        </div>
        <IngredientOnHand list={list}></IngredientOnHand>
        <GenerateRecipe list={list}></GenerateRecipe>
      </div>
    </div>
  );
};

export default AddIngredient;
