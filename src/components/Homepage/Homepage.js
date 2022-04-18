import './Homepage.css';
import Board from "../Board/Board";
import {BoardService} from "../../services/BoardService";

const Homepage = (props) => {
    const boardService = new BoardService();

    const user = props.users.find(user => user.username === props.loggedUser);
    console.log(user);
    const searchedBoard=user.active_board;
    console.log(searchedBoard);

    console.log(user.boards.find(board => board.board_name === searchedBoard));
    return (
        <>
            {boardService.getCurrentBoard(props.users, props.loggedUser) ?
                <div className="homepage-board">
                    <Board loggedUser={props.loggedUser}
                           users={props.users}/>
                </div>
                :
                <></>}
        </>
    )
}

export default Homepage;