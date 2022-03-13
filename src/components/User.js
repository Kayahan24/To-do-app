import React, { Component } from "react";
import './User.css';

class User extends Component{

    onDeleteClick(id,e){
        const {deleteUser} = this.props;
        deleteUser(id);
    }
    render(){
        const {id,name,tittle,text} = this.props;
      return(
        <div id="card" className="card text-white bg-dark mb-3">
          <div className="card-header">{name}</div>
          <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{text}</p>
          <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">Delete</button>
        </div>
      </div>
      );
    }
}

export default User;