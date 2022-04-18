import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Boards from "./components/Boards/Boards";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    const loggedUser = localStorage.getItem("logged_user");
    return (
        <>
            <NavBar loggedUser={loggedUser}
                    users={JSON.parse(localStorage.getItem("users"))}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Login/>}/>
                    {localStorage.getItem('logged_user') ?
                        <>
                            <Route path="/home" element={<Homepage
                                loggedUser={loggedUser}
                                users={JSON.parse(localStorage.getItem("users"))}/>}/>

                            <Route path="/boards" element={<Boards
                                loggedUser={loggedUser}
                                users={JSON.parse(localStorage.getItem("users"))}/>}/>
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
