import { useState } from "react";
import "../css/claude-css.css";
import ClaudeOutput from "./ClaudeOutput";

interface Props {
  list: string[];
}

const GenerateRecipe = ({ list }: Props) => {
  let [genRecipe, setGenRecipe] = useState(false);

  return (
    <>
      <div className="sub-3-generate-recipe">
        <h5>Ready for Recipe</h5>
        <p>
          Generate a Recipe from your list of ingredient{" "}
          <span>
            {genRecipe ? (
              <button className="gen-rec" onClick={() => setGenRecipe(false)}>
                Clear
              </button>
            ) : (
              <button className="gen-rec" onClick={() => setGenRecipe(true)}>
                Generate
              </button>
            )}
          </span>
        </p>
      </div>
      {genRecipe && <ClaudeOutput list={list} />}
    </>
  );
};

export default GenerateRecipe;
