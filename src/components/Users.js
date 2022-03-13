import React, { Component } from "react";
import User from "./User";

class Users extends Component{
    render() {
      const {users,deleteUser}=this.props;

      return(
        
      
           
               users.map(user => {
                   const { id,name, tittle,text}=user;
                   return <User key={id} id={id} name={name} tittle={tittle} text={text} deleteUser={deleteUser}/>
               })
           
        
      );
    }
}

export default Users;