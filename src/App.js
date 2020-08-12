import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Header from './components/Header/Header'
import LetterList from './components/LetterList/LetterList'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <LetterList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
