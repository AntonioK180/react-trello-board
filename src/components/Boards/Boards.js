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
            <div className="board" onClick={() => boardService
                .handleBoardsOnClick(props.users,
                    props.loggedUser, board.board_name)}>
                <h2>{board.board_name}</h2>
            </div>
        )
    }

    return (
        <div className="boards">
            {getBoards().map(board => displaySingleBoard(board))}
            <div className="add-board">
                <form onSubmit={() => boardService
                    .handleBoardSubmit(props.users, props.loggedUser, boardName)}>
                    <label>
                        Board Name:
                        <input type="text" name="boardName"
                               value={boardName}
                               onChange={(event) => {
                                   setBoardName(event.target.value)
                               }}
                               placeholder="Board name"
                               required/>
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}


export default Boards;
