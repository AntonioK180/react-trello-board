import React from 'react';
import "./Login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            flag: false
        };
    }

    handleSubmit(event){
        event.preventDefault();
        localStorage.setItem('loggedIn', true);
        this.setState({flag: !this.state.flag});
    }

    render () {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-container">
                        <input type="text" name="uname" placeholder="Enter your username"/>
                    </div>
                    <div className="button-container">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        )
    }

    
}