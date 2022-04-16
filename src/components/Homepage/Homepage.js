import React from 'react';
import './Homepage.css';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            workspaces_displayed: false,
            recents_displayed: false
        }

        this.workspaceOnClick = this.workspaceOnClick.bind(this);
        this.recentOnClick = this.recentOnClick.bind(this);
        this.createOnClick = this.createOnClick.bind(this);
    }

    workspaceOnClick() {
        let workspace = document.getElementById('workspace-dropdown-content');

        this.state.workspaces_displayed ? 
            workspace.style.display = 'none' : workspace.style.display = 'block';

        this.setState({workspaces_displayed: !this.state.workspaces_displayed});
    }

    recentOnClick() {
        let recent = document.getElementById('recent-dropdown-content');

        this.state.recents_displayed ? 
            recent.style.display = 'none' : recent.style.display = 'block';

        this.setState({recents_displayed: !this.state.recents_displayed});
    }
    
    createOnClick() {
        // Create button must be implemented
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepage-title">
                    <div className="homepage-title-main">
                        <div className="trello-icon"></div>
                        <h1>Trello</h1>
                        <div className="workspace-dropdown">
                            <button onClick={this.workspaceOnClick} className="workspace-dropbtn">Workspaces</button>
                            <div id="workspace-dropdown-content">
                                {/* Component for workspace-dropdown-content must be created */}
                            </div>
                        </div>
                        <div className="recent-dropdown">
                            <button onClick={this.recentOnClick} className="recent-dropbtn">Recent</button>
                            <div id="recent-dropdown-content">
                                {/* Component for recent-dropdown-content must be created */}
                            </div>
                        </div>
                        <button id="create-btn" onClick={this.createOnClick}>Create</button>
                    </div>
                    <div className="homepage-title-account">
                        <div className="account-icon"></div>
                        <h2>{this.state.user.username}</h2>
                    </div>
                </div>
            </div>
        )
    }
}