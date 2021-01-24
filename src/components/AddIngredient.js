import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddIngredient = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [origin, setOrigin] = useState("");
  const { addIngredient, ingredients } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = e => {
console.log('submit click')
    e.preventDefault();
    const newIngredient = {
      id: ingredients.length + 1,
      name,
      type,
      origin
    };
    addIngredient(newIngredient);
    history.push("/");
  };

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={type}
              onChange={e => setType(e.target.value)}
              type="text"
              placeholder="Enter type"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="orgin"
            >
              Origin
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={origin}
              onChange={e => setOrigin(e.target.value)}
              type="text"
              placeholder="Enter origin"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add ingredient
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