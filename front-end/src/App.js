import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import './App.css';
import Login from "./components/login";
import MainScreen from "./components/mainScreen";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/main-screen">
            <Route exact path="/main-screen" component={MainScreen} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
