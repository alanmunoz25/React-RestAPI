import React, { Component } from 'react';
import User from '../components/User';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      users:[]
    }
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=25')
       .then(response => response.json())
       .then(users => {
         users.results.forEach(user => {
           let data = {
             name:user.name.first,
             lname:user.name.last,
             gender:user.gender,
             email:user.email,
             picture:user.picture.thumbnail,
             id:user.login.password
           }
           console.log(data)
           this.setState({
             users:this.state.users.concat([data])
           })
         })
       })
  }
  render() {
    console.log( this.state.users.length )
    if ( this.state.users.length > 0 ) {
      return (
        <div>
          {this.state.users.map(user => <User key={user.id} name={user.name} lname={user.lname} gender={user.gender} picture={user.picture} email={user.email} />) }
        </div>
      );
    }
    return (
      <p>Cargando usuarios...</p>
    )
  }
}



export default UserList;
