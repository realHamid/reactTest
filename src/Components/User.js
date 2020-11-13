import React , { Component } from "react";
import './User.css';

class User  extends Component {

    removeMe = () => {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <div className="user">
                <div>
                    <label> Name: </label>
                    <span> { this.props.name} </span>
                </div>
                <div>
                    <label> Age: </label>
                    <span> { this.props.age} </span>
                </div>
                <div>
                    <label> id: </label>
                    <span> { this.props.id} </span>
                </div>
                <button onClick={this.removeMe} className="remove"> X </button>
            </div>
        );
    }
}

export default User;