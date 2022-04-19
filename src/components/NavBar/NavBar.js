import './NavBar.css';
import { useState } from "react";
import { BoardService } from '../../services/BoardService';
import CreateBoard from "../CreateBoard/CreateBoard";

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

	return (
		<>
			{displayCreateBoard ? <CreateBoard
				loggedUser={props.loggedUser}
				users={props.users} /> : <></>}
			<div className="navigation-menu" id='Navbar'>
				<div className='left-side'>
					<div className="trello-icon"></div>
					<h1>Trello</h1>
					{props.loggedUser?
						<>
							<button onClick={() => window.location.href = "/boards"}
								className="boards-dropbtn">Boards
							</button>
						</>:
						<></>
					}
				</div>
				<div className='right-side'>
					<div className="account-icon"></div>
					<h2>{props.username}</h2>
				</div>
			</div>
		</>
	);
}


export default NavBar;



{/* <div className="homepage-title-main">

{props.loggedUser ?
	<div className='menu-items'>
		<div className='left-items'>

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
		<button className='create-board-button cursor-pointer' onClick={onClickCreateBoard}>Create</button>
		</div>

	</div>
	: <></>}
</div>
<div className="homepage-title-account">

</div> */}