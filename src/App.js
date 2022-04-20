import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortalDiv } from './components/Portal/Portal';
import Boards from "./components/Boards/Boards";
import NavBar from "./components/NavBar/NavBar";
import {useEffect, useState} from "react";

const App = () => {
    const loggedUser = localStorage.getItem("logged_user");
    const [wordForSearch, setWordForSearch] = useState("");

    const search = (word) => {
        if (word !== "") {
            let cards = document.querySelectorAll(".card-body");

            cards.forEach(card => {
                if (card.textContent.toLowerCase().includes(word.toLowerCase()))
                    card.classList.toggle("hide", false);
                else
                    card.classList.toggle("hide", true);
            });
        }
    };

    useEffect(() => search(wordForSearch));
    return (
        <>
            <NavBar loggedUser={loggedUser}
                    users={JSON.parse(localStorage.getItem("users"))}
                    setWordForSearch={setWordForSearch} />
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
