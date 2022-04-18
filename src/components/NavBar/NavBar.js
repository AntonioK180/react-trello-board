import './NavBar.css';
import {useEffect, useState} from "react";
import {BoardService} from '../../services/BoardService';
import CreateBoard from "../CreateBoard/CreateBoard";

const NavBar = (props) => {
    const [state, setState] = useState("");
    const [displayCreateBoard, setDisplayCreateBoard] = useState(false);
    const boardService = new BoardService();
    const [wordForSearch, setWordForSearch] = useState("");

    const search = (word) => {
        // TODO: Needs to be implemented.
    };

    useEffect(() => {
        if (props.loggedUser) {
            let input = document.getElementById("search-input");
            input.addEventListener("keyup", function (e) {
                if (KeyboardEvent.code === 13) {
                    e.preventDefault();
                    search(wordForSearch);
                }
            });
        }
    });

    const recentOnClick = () => {
        let recent = document.getElementById('recent-dropdown-content');

        state.recents_displayed ?
            recent.style.display = 'none' : recent.style.display = 'flex';

        setState({recents_displayed: !state.recents_displayed});
    }

    const onClickCreateBoard = () => {
        setDisplayCreateBoard(!displayCreateBoard);
    }

    const fetchRecentBoards = () => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);
        return user.recent_boards;
    }

    return (
        <>
            {displayCreateBoard ? <CreateBoard
                loggedUser={props.loggedUser}
                users={props.users}/> : <></>}
            <div className="homepage">
                <div className="homepage-title">
                    <div className="homepage-title-main">
                        <div className="trello-icon"></div>
                        <h1>Trello</h1>
                        {props.loggedUser ?
                            <>
                                <div className="boards-dropdown">
                                    <button onClick={() => window.location.href = "/boards"}
                                            className="boards-dropbtn">Boards
                                    </button>
                                </div>
                                <div className="recent-dropdown">
                                    <button onClick={recentOnClick} className="recent-dropbtn">Recent</button>
                                    <div id="recent-dropdown-content">
                                        {fetchRecentBoards().map(board =>
                                            <button className="btn-recent-board" key={board}
                                                    onClick={() =>
                                                        boardService.handleBoardsOnClick(props.users,
                                                            props.loggedUser, board)}>{board}
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <button id="create-btn" onClick={onClickCreateBoard}>Create</button>
                                <div className="homepage-title-account">
                                    <div className="search-bar">
                                        <div className="search-icon"></div>
                                        <input
                                            id="search-input"
                                            type="text"
                                            onChange={(event) => setWordForSearch(event.target.value)}
                                        />
                                    </div>
                                    <div className="account-icon"></div>
                                    <h2>{props.loggedUser}</h2>
                                </div>
                            </>
                            : <></>}
                    </div>
                </div>
            </div>
        </>
    );
}


export default NavBar;
