import "../css/claude-css.css";

interface Props {
  list: string[];
}

const IngredientOnHand = ({ list }: Props) => {
  return (
    <div className="sub-container-2-claude-chef">
      <p className="heading-ingredient-at-hand"> Ingredient On Hand</p>
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-item" key={"IngredientOnHand-" + index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientOnHand;
