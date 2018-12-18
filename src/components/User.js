import React, { Component } from 'react';

class User extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="App-Header">
        <h3>{this.props.name} {this.props.lname}</h3>
        <img src="{picture}" className="App-Logo" alt="Picture" />
      </div>
      {this.props.email} - {this.props.gender}
      </div>
    );
  }
}


export default User;
