import './Homepage.css';
import Board from "../Board/Board";
import { BoardService } from "../../services/BoardService";
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';

const Homepage = (props) => {
    const boardService = new BoardService();
    const [wordForSearch, setWordForSearch] = useState("");

    const search = (word) => {
        if (word !== "") {
            let cards = document.querySelectorAll(".card-body");
            let columns = document.querySelectorAll(".Column");

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
            <NavBar loggedUser={props.loggedUser}
                users={props.users}
                setWordForSearch={setWordForSearch} />
            {boardService.getCurrentBoard(props.users, props.loggedUser) ?
                <div className="homepage-board">
                    <Board loggedUser={props.loggedUser}
                        users={props.users} />
                </div>
                :
                <></>}
        </>
    )
}

export default Homepage;