import React from "react";
import Ingredient from "./Ingredient";

const Recipe = ({ recipe }) => {
  let ingredients = [];

  for (let i = 1; i < 21; i++) {
    if (recipe[`strIngredient${i}`]) {
      let ingredient = recipe[`strIngredient${i}`];
      let measure = recipe[`strMeasure${i}`];

      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="card">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={`photo de ${recipe.strMeal}`} />
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </ul>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default Recipe;
