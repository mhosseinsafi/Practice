import "./style/App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './home';
import instruction from './instruction';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/instructions" component={instruction} />
      </Switch>
    </Router>
  );
}

export default App;

