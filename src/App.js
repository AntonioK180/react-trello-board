import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import React from 'react';
import userContext from './UserContext';
import { useState } from 'react';


const App = () => {
	const [user, setUser] = useState("");

	return (
		<userContext.Provider value={{user: user, setUser: setUser}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage/>}></Route>							
					<Route path="login" element={<Login/>}></Route>
				</Routes>
			</BrowserRouter>
		</userContext.Provider>
	)
}

export default App;
