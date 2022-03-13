import React, { Component } from "react";
import './User.css';

class AddUser extends Component{
    state = {
        name: "",
        tittle: "",
        text: ""
    }
    onNameChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onTittleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onTextChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onAddSubmit(e){
        const {addUser} = this.props;
        const {name,tittle,text} = this.state;

        const newUser = {
            
            id : Math.round(Math.random()*100),
            name: name,
            tittle: tittle,
            text: text
        }
        addUser(newUser);

        e.preventDefault();//Sayfa yenilenmesini önler
    }
    render() {
        const {name,tittle,text} = this.state;
      return(
        <div className="card">
            <h4 id="head" className="card-header text-white bg-dark mt-4">To Do List</h4>
            <div className="card-body">
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" value={name} onChange={this.onNameChange.bind(this)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tittle">Tittle</label>
                        <input type="text" name="tittle" id="tittle" placeholder="Enter Tittle" className="form-control" value={tittle} onChange={this.onTittleChange.bind(this)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input type="text" name="text" id="text" placeholder="Enter Text" className="form-control" value={text} onChange={this.onTextChange.bind(this)}></input>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block">Add New Text</button>
                </form>
            </div>
        </div>  
      );
    }
}

export default AddUser;