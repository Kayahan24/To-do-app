import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component{
  

  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Kayahan Sanli",
          tittle:"Araba",
          text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut praesentium illo vitae qui reiciendis tenetur eaque tempora hic minus corrupti!"
        },
        {
          id: 2,
          name: "Aslıhan Sanli",
          tittle:"Karavanda Yaşam",
          text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut praesentium illo vitae qui reiciendis tenetur eaque tempora hic minus corrupti!"
        },
        {
          id: 3,
          name: "Yavuz Selim Arslan ",
          tittle:"Basketbol",
          text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut praesentium illo vitae qui reiciendis tenetur eaque tempora hic minus corrupti!"
        }
      ]

    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser) {

    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    });
  }
  deleteUser(id){
    let updatedUsers = this.state.users;
    updatedUsers= updatedUsers.filter(user =>user.id !== id);
    this.setState({
      users: updatedUsers
    })
  }
  render() {
    return(
      <div className="container">   
        <AddUser addUser={this.addUser}/>
        <Users deleteUser={this.deleteUser} users = {this.state.users}/>
      </div>
      
    );
  }
}
export default App;