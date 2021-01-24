import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './styles.css';
import Home from './components/Home';
import { AddIngredient } from './components/AddIngredient';
import { EditIngredient } from './components/EditIngredient';
import Rules from './components/Rules';
import  MyNavBar from './shared/MyNavBar';
import  Challenge from './components/Challenge';
import  Competition from './components/Competition';

import { GlobalProvider } from './context/GlobalState';

/*
1) Refactor all food to ingredients
2) Add a route to your ingredientList.js in app js
3) Add a link to that route in MyNavbar.js
4) Create ingredientList.js based off example
5) Create a context folder and add AppReducer.js & GlobalState.js
6) CRUD by Thursday
*/

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/add" component={AddIngredient} exact />
      <Route path="/edit/:id" component={EditIngredient} exact />
    </Switch>
    </BrowserRouter>
  </GlobalProvider>
  // </div>
);
}

export default App;