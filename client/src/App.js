import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <>
      <Switch>
        <Route 
        exact path='/'
        component={LandingPage}
        />
        <Route 
        path='/home'
        component={Home}
        />
      </Switch>
    </>
  );
}

export default App;
