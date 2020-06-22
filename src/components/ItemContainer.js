import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';


class ItemContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.content) {
      case "top":
        return this.renderCategoryView();
      case "aboutus":
        return this.renderAboutUs();
      case "contact":
        return this.renderContact();
    }
  }

  renderCategoryView() {
    return <Home />;

  }

  renderAboutUs() {
    return <div>Hello about us</div>
  }

  renderContact() {
    return <div>
    <Contact />
    </div>
  }
}

class Item extends React.Component {
  render() {
    return <div>Hi item</div>;
  }
}



export default ItemContainer;
