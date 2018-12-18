import React, { Component } from 'react';
import '../assets/App.css';
import logo from '../assets/logo.svg';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    console.log(this.state.users.length);
    return (
      <div className="App">
       <div className="App-Header">
        <h2>RestAPI con React</h2>
       </div>
       <div>
        <p><strong>Agrega usuarios</strong></p>
        <UserList users={this.state.users} />
      </div>
      </div>
    );
  }
}

export default App;
