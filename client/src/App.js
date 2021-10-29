import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AddRecipe from './components/AddRecipe/AddRecipe.jsx'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'
import RecipesLoader from './components/Loaders/RecipesLoader';
import DietsLoader from './components/Loaders/DietsLoader';

function App() {

  RecipesLoader()
  DietsLoader()
 
  return (
    <>
      <Switch>
        <Route 
        exact path='/'
        component={LandingPage}
        />
        <Route 
        exact path='/home/!'
        component={Home}
        />
        <Route 
        path='/recipes/:id'
        component={RecipeDetail}
        />
        <Route 
        path='/newrecipe'
        component={AddRecipe}
        />
      </Switch>
    </>
  );
}

export default App;
