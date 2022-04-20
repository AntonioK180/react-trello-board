import './Boards.css';
import {useState} from "react";
import {BoardService} from "../../services/BoardService";

const Boards = (props) => {
    const boardService = new BoardService();
    const [boardName, setBoardName] = useState("");


    const getBoards = () => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);

        return user.boards;
    }

    const displaySingleBoard = (board) => {
        return (
            <div className="single-board cursor-pointer" onClick={() => boardService
                .handleBoardsOnClick(props.users,
                    props.loggedUser, board.board_name)}>
                <h2>{board.board_name}</h2>
            </div>
        )
    }

    return (
        <div className="Boards">
            {getBoards().map(board => displaySingleBoard(board))}
        </div>
    )
}


export default Boards;
