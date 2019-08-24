import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import { Button } from 'antd';
import './App.css';
import "antd/dist/antd.css"

import LayoutPage from "./views/LayoutPage";
import LoginPage from "./views/LoginPage";

const App = ({ history }) => {
  return(
    <Router history={history}>
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <Route path='/estudiante' component={LayoutPage} />           
      </Switch>
    </Router>
  )
};

export default App;