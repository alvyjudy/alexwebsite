import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class ItemContainer extends React.Component {

  render() {
    return <div>Hello ItemContainer</div>;
  }
}

class Item extends React.Component {
  render() {
    return <div>Hi item</div>;
  }
}


export default ItemContainer;
