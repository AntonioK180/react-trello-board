import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { PortalDiv } from './components/Portal/Portal';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Login/>}/>
                    {localStorage.getItem('logged_user') ?
                        <>
                            <Route path="/home" element={<Homepage
                                loggedUser={localStorage.getItem("logged_user")}
                                users={JSON.parse(localStorage.getItem("users"))}/>}/>
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
