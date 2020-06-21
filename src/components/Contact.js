import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from '../stylesheets/Contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      email: props.email,
      message: props.message
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
     this.setState({[name]: value});
   }

   handleSubmit(event) {
    alert('Submitted');
    event.preventDefault();
  }

  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className={styles.FormContainer}>

        <label>Name:</label>
        <input
          type="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label>Message:</label>
        <textarea
          type="message"
          value={this.state.message}
          onChange={this.handleChange}
        />

      <input type="submit" value="Submit" />
      </form>

    )

  }
}


export default Contact;
