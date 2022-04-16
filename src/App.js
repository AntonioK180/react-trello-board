import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import React from 'react';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			user: {
				username: "username"
			}
		}
	}

	render() {	
		return (
			<BrowserRouter>
				<Routes>
					{this.state.loggedIn ? 
						<Route path="/" element={<Homepage user={this.state.user}/>}></Route>:							
						<Route path="/" element={<Login/>}></Route>
					}
				</Routes>
			</BrowserRouter>
		)
	}
}

export default App;
