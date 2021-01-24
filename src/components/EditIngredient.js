import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const EditIngredient = route => {
  let history = useHistory();
  const { ingredients, editIngredient } = useContext(GlobalContext);
  const [selectedIngredient, setSelectedIngredient] = useState({
    id: null,
    name: "",
    type: "",
    origin: "",
  });
  const currentIngredientId = route.match.params.id;

  useEffect(() => {
    const ingredientId = currentIngredientId;
    const selectedIngredient = ingredients.find(ing => ing.id === parseInt(ingredientId));
    setSelectedIngredient(selectedIngredient);
     //eslint-disable-next-line
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    editIngredient(selectedIngredient);
    history.push('/');
  };

  const handleOnChange = (ingredientKey, value) => 
    setSelectedIngredient({ ...selectedIngredient, [ingredientKey]: value });

return (
  <Fragment>
  <div className="w-full max-w-sm container mt-20 mx-auto">
    <form onSubmit={onSubmit}>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Name of ingredient
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedIngredient.name}
          onChange={e => handleOnChange("name", e.target.value)}
          type="text"
          placeholder="Enter ingredient"
        />
      </div>
      <div className="w-full  mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="type"
        >
          Type
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedIngredient.type}
          onChange={e => handleOnChange("type", e.target.value)}
          type="text"
          placeholder="Enter type"
        />
      </div>
      <div className="w-full  mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="origin"
        >
          Origin
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedIngredient.origin}
          onChange={e => handleOnChange("origin", e.target.value)}
          type="text"
          placeholder="Enter origin"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
          Edit ingredient
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
    </form>
  </div>
</Fragment>
  );
};