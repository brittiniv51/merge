export default (state, action) => {
  switch (action.type) {
    case "REMOVE_INGREDIENT":
      return {
      ...state, 
      ingredients: state.ingredients.filter(
        ingredient => ingredient.id !== action.payload
       )
      };
    case "ADD_INGREDIENTS":
      return {
        ...state, 
        ingredients: [...state.ingredients, action.payload]
      };
    case "EDIT_INGREDIENTS":
      const updatedIngredient = action.payload;

      const updatedIngredients = state.ingredients.map(ingredient => {
        if (ingredient.id === updatedIngredient.id) {
          return updatedIngredient;
        }
        return ingredient;
      });

      return {
        ...state, 
        ingredients: updatedIngredients
      };
      default:
        return state;
  }
};