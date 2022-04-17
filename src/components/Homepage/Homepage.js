import {useState} from 'react';
import './Homepage.css';
import CreateBoard from "../CreateBoard/CreateBoard";
import Board from "../Board/Board";

const Homepage = (props) => {
    const [state, setState] = useState("");
    const [displayCreateBoard, setDisplayCreateBoard] = useState(false);

    const workspaceOnClick = () => {
        let workspace = document.getElementById('workspace-dropdown-content');

        state.workspaces_displayed ?
            workspace.style.display = 'none' : workspace.style.display = 'block';

        setState({workspaces_displayed: !state.workspaces_displayed});
    }

    const recentOnClick = () => {
        let recent = document.getElementById('recent-dropdown-content');

        state.recents_displayed ?
            recent.style.display = 'none' : recent.style.display = 'block';

        setState({recents_displayed: !state.recents_displayed});
    }

    const onClickCreateBoard = () => {
        setDisplayCreateBoard(!displayCreateBoard);
    }

    const getBoard = () => {
        const user = props.users.find(user => user.username === props.loggedUser);
        const activeBoard = user.active_board;

        return user.boards.find(board => board.id === activeBoard);
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
                        <div className="workspace-dropdown">
                            <button onClick={workspaceOnClick} className="workspace-dropbtn">Workspaces</button>
                            <div id="workspace-dropdown-content">
                                {/* Component for workspace-dropdown-content must be created */}
                            </div>
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
                {getBoard() ?
                    <div className="homepage-board">
                        <Board loggedUser={props.loggedUser}
                               users={props.users}/>
                    </div>
                    :
                    <></>}
            </div>
        </>
    )
}

export default Homepage;