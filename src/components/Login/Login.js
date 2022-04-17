import React from 'react';
import "./Login.css";
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


const Login = () => {
	const [username, setUsername] = useState("");
	//const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const usernames = localStorage.getItem("usernames");

		if (usernames !== null) {
			if (!usernames.includes(username)) {
				usernames.push(username);
				localStorage.setItem("usernames", usernames);	
			}
		}
		//navigate("/")
	}

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="input-container">
					<input type="text" name="uname"
						value={username}
						onChange={(event) => {
							setUsername(event.target.value);
						}}
						placeholder="Enter your username" />
				</div>
				<div className="button-container">
					<input type="submit" value="Login" />
				</div>
			</form>
		</div>
	)
}

export default Login;