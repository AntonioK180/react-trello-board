import './NavBar.css';
import { useState } from 'react';
import { BoardService } from '../../services/BoardService';
import CreateBoard from '../CreateBoard/CreateBoard';

const NavBar = (props) => {
    const [state, setState] = useState("");
    const [displayCreateBoard, setDisplayCreateBoard] = useState(false);

    const boardService = new BoardService();

    const recentOnClick = () => {
        let recent = document.getElementById('recent-dropdown-content');

        state.recents_displayed ?
            recent.style.display = 'none' : recent.style.display = 'flex';

        setState({ recents_displayed: !state.recents_displayed });
    }

    const onClickCreateBoard = () => {
        setDisplayCreateBoard(!displayCreateBoard);
    }

    const fetchRecentBoards = () => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);
        return user.recent_boards;
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('logged_user');
        window.location.href = "/";
    }

    return (
        <>
            {displayCreateBoard ? <CreateBoard
                loggedUser={props.loggedUser}
                users={props.users} /> : <></>}
            <div id="navbar">
                <div className="navbar-title">
                    <i className="fa fa-trello"></i>
                    <div className="title">Trello</div>
                    {props.loggedUser ?
                        <>
                            <button onClick={() => window.location.href = "/boards"}
                                className="dropbtn boards-btn">Boards</button>
                            <div className="recent-dropdown">
                                <button onClick={recentOnClick} className="dropbtn">Recent</button>
                                <div id="recent-dropdown-content">
                                    {fetchRecentBoards().map(board =>
                                        <button className="btn-recent-board cursor-pointer" key={board}
                                            onClick={() =>
                                                boardService.handleBoardsOnClick(props.users,
                                                    props.loggedUser, board)}>{board}
                                        </button>
                                    )}
                                </div>
                            </div>
                            {window.location.pathname === "/archive" ? <></> :
                                <button className="dropbtn"
                                    onClick={() => window.location.href = "/archive"}>Archive</button>
                            }
                            <button className="create-btn" onClick={onClickCreateBoard}>Create</button>
                        </>
                        : <></>}
                </div>
                {props.loggedUser ?
                        <div className="homepage-account">
                            <div className="search-bar">
                                <i className="fa fa-search"></i>
                                <input
                                    id="search-input"
                                    type="text"
                                    onChange={(event) => props.setWordForSearch(event.target.value)}
                                />
                            </div>
                            <i className="fa fa-user"></i>
                            <div className="logged-user">{props.loggedUser}</div>
                            <a href="/" className="create-btn logout-link" onClick={logout}>Logout</a>
                        </div>
                        : <></>
                    }
            </div>
        </>
    );
}               


export default NavBar;