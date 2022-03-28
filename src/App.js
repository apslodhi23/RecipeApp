import "./App.css";
// import "./Keys";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "534c680f";
  const YOUR_APP_KEY = "c4ae5a138e76aeb789aa8a42e73357c3";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipeData() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onsubmit = (e) => {
    e.preventDefault();
    getRecipeData();
  };

  return (
    <div className="app">
      <h1>Recipe Store 🍕</h1>
      <form className="input_ingredient" onSubmit={onsubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Ingrident"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="input_submit" type="submit" value="Search" />
        <select className="input_health">
          <option onclick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onclick={() => sethealthLabel("vegetarian")}>
            Vegetarian
          </option>
          <option onclick={() => sethealthLabel("dairy-free")}>
            Dairy-free
          </option>
          <option onclick={() => sethealthLabel("gluten-free")}>
            Gluten-free
          </option>
          <option onclick={() => sethealthLabel("wheat-free")}>
            Wheat-free
          </option>
          <option onclick={() => sethealthLabel("soy-free")}>Soy-free</option>
          <option onclick={() => sethealthLabel("low-sugar")}>Low-sugar</option>
          <option onclick={() => sethealthLabel("egg-free")}>Egg-free</option>
          <option onclick={() => sethealthLabel("sugar-free")}>
            Sugar-free
          </option>
        </select>
      </form>

      <div className="input_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
