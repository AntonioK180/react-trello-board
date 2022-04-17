import { useState, useEffect } from "react";
import "./Homepage.css";


const Homepage = (props) => {
    const [state, setState] = useState("");
    const [wordForSearch, setWordForSearch] = useState("");

    const search = (word) => { 
        // TODO: Needs to be implemented.
    };

    useEffect(() => {
        let input = document.getElementById("search-input");
        input.addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                search(wordForSearch);
            }
        });
    });

    const workspaceOnClick = () => {
        let workspace = document.getElementById("workspace-dropdown-content");

        state.workspaces_displayed
            ? (workspace.style.display = "none")
            : (workspace.style.display = "block");

        setState({ workspaces_displayed: !state.workspaces_displayed });
    };

    const recentOnClick = () => {
        let recent = document.getElementById("recent-dropdown-content");

        state.recents_displayed
            ? (recent.style.display = "none")
            : (recent.style.display = "block");

        setState({ recents_displayed: !state.recents_displayed });
    };

    const createOnClick = () => {
        // Create button must be implemented
    };

    return (
        <div className="homepage">
            <div className="homepage-title">
                <div className="homepage-title-main">
                    <div className="trello-icon"></div>
                    <h1>Trello</h1>
                    <div className="workspace-dropdown">
                        <button onClick={workspaceOnClick} className="workspace-dropbtn">
                            Workspaces
                        </button>
                        <div id="workspace-dropdown-content">
                            {/* Component for workspace-dropdown-content must be created */}
                        </div>
                    </div>
                    <div className="recent-dropdown">
                        <button onClick={recentOnClick} className="recent-dropbtn">
                            Recent
                        </button>
                        <div id="recent-dropdown-content">
                            {/* Component for recent-dropdown-content must be created */}
                        </div>
                    </div>
                    <button id="create-btn" onClick={createOnClick}>
                        Create
                    </button>
                </div>
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
                    <h2>{props.username}</h2>
                </div>
            </div>
            <div className="homepage-board"></div>
        </div>
    );
};

export default Homepage;
