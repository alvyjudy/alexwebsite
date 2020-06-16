import React from 'react';
import ReactDom from'react-dom';
//import "./App.css";
//import NavBar from './components/NavBar.js';
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
    return (
      <div className="App">
        <p>Hello world</p>
        //<NavBar />;
        //<ItemView category={this.state.category} />
      </div>
    );
  }
}

export default App;
