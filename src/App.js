import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
                    <Route path="/*" element={<Login/>} />
                    {localStorage.getItem('logged_user') ?
						<>
							<Route path="/home" element={<Homepage/>} />
						</>
                        :
                        <></>
                    }
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
