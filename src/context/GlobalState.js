import React, { createContext, useReducer } from  "react";
import AppReducer from "./AppReducer";

const initialState = {
  ingredients: [
    {
      id: 1,
      name: "cilantro",
      type: "herb",
      origin: "Africa"
    }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeIngredient(id) {
    dispatch({
      type: "REMOVE_INGREDIENT",
      payload: id
    });
  }

  function addIngredient(ingredients) {
    dispatch({
     type: "ADD_INGREDIENTS",
     payload: ingredients
    });
  }

  function editIngredient(ingredients) {
    dispatch({
      type: "EDIT_INGREDIENTS",
      payload: ingredients
    });
  }

return (
  <GlobalContext.Provider
    value={{
      ingredients: state.ingredients,
      removeIngredient,
      addIngredient,
      editIngredient
    }}
    >
  {children}
  </GlobalContext.Provider>
  );
};