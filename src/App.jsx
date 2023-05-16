import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const getData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`)
      .then((res) => setRecipes(res.data.meals));
  };

  useEffect(() => getData(), [userSearch]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value);
  };

  return (
    <header>
      <h1>MEAL APP</h1>
      <form>
        <label for="search">Entrez le nom d'un aliment (en anglais)</label>
        <input
          type="text"
          placeholder="ex : beef"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className="card-container">
        <ul className="container">
          {recipes.map((recipe) => (
            <Recipe key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      </div>
    </header>
  );
}

export default App;
