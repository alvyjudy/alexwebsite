import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar.js';

//import "./App.css";
//import ItemView from './components/InsertItems.js';


//object for managing application state
//to do...

//object for UI
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {category:"top"};
  }

  render() {
    return <NavBar />;
  }
}

export default App;
