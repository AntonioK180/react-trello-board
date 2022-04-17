import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
	(function () {
		if (localStorage.getItem('users') === null)
			localStorage.setItem('users', []);
	})();

	const fetchUser = (users, username) => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].username === username)
				return users[i];
		}

		return null;
	}

	const username = localStorage.getItem('loggedUser');
	if (username !== null){
		const users = localStorage.getItem('users');
		const user = fetchUser(users, username);
		
		return <Homepage username={username} boards={user.boards}/>
	} else
		window.location.href = '/login';


	return (
		<>
			<BrowserRouter>
				<Routes>
					{}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
