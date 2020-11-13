import React , { Component } from 'react';
import './App.css';
import  User from './Components/User';

class App extends Component {

    state = {
        users : [
            { id:1 , name : "Hamid" , age : 12 }
        ],
        isVisable : true
    }

    addPerson = () => {
        let name     = prompt("Enter your name");
        let age      = prompt("Enter your age ");

        let newState = {...this.state};
        let rowId =  ( newState.users.length != 0  )
            ? newState.users[newState.users.length -1 ].id + 1
            : 1;

        let person   = { id : rowId  , name:name , age:age };
        newState.users.push(person);
        // newState.users  = [ ...newState.users , person ];
        this.setState(newState);
    }

    removePerson = (id) => {
        let newStats = {...this.state};
        newStats.users = newStats.users.filter( user => user.id != id );
        this.setState(newStats);
    }

    showList = () => {
        return (
            <div>
                <button onClick={this.addPerson}> add Person </button>
                {
                    this.state.users.map(user => (
                        <User
                            key         = {user.id }
                            name        = {user.name}
                            age         = {user.age}
                            id          = {user.id}
                            onRemove    = {this.removePerson}
                        />
                    ))
                }
            </div>
        );
    }


    render(){
        return (
            <div>
                {this.showList()}
            </div>
        );
    }
}


export default App;
