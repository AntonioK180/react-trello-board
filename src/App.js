import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortalDiv } from './components/Portal/Portal';
import Boards from "./components/Boards/Boards";

const App = () => {
    const loggedUser = localStorage.getItem("logged_user");

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Login loggedUser={loggedUser} />} />
                    {localStorage.getItem('logged_user') ?
                        <>
                            <Route path="/home" element={<Homepage
                                loggedUser={loggedUser}
                                users={JSON.parse(localStorage.getItem("users"))} />} />

                            <Route path="/boards" element={<Boards
                                loggedUser={loggedUser}
                                users={JSON.parse(localStorage.getItem("users"))} />} />
                        </>
                        :
                        <></>
                    }
                </Routes>
            </BrowserRouter>
            <PortalDiv></PortalDiv>
        </>
    )
}

export default App;
