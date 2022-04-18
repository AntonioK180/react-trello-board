import './NavBar.css';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import CreateBoard from "../CreateBoard/CreateBoard";

const NavBar = (props) => {
    const [state, setState] = useState("");
    const [displayCreateBoard, setDisplayCreateBoard] = useState(false);

    const recentOnClick = () => {
        let recent = document.getElementById('recent-dropdown-content');

        state.recents_displayed ?
            recent.style.display = 'none' : recent.style.display = 'block';

        setState({recents_displayed: !state.recents_displayed});
    }

    const onClickCreateBoard = () => {
        setDisplayCreateBoard(!displayCreateBoard);
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
                        <div className="boards-dropdown">
                            <button onClick={() => window.location.href="/boards"} className="boards-dropbtn">Boards</button>
                        </div>
                        <div className="recent-dropdown">
                            <button onClick={recentOnClick} className="recent-dropbtn">Recent</button>
                            <div id="recent-dropdown-content">
                                {/* Component for recent-dropdown-content must be created */}
                            </div>
                        </div>
                        <button id="create-btn" onClick={onClickCreateBoard}>Create</button>
                    </div>
                    <div className="homepage-title-account">
                        <div className="account-icon"></div>
                        <h2>{props.username}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NavBar;
