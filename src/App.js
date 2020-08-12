import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Header from './components/Header/Header'
import WritingRoom from './components/WritingRoom/WritingRoom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <WritingRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
