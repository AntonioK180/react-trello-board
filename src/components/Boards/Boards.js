import './Boards.css';
import { useState } from "react";
import { BoardService } from "../../services/BoardService";

const Boards = (props) => {
    const boardService = new BoardService();
    const [boardName, setBoardName] = useState("");


    const getBoards = () => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);

        return user.boards;
    }

    const displaySingleBoard = (board, index) => {
        return (
            <h3 className="board" key={index} onClick={() => boardService
                .handleBoardsOnClick(props.users,
                    props.loggedUser, board.board_name)}>{board.board_name}</h3>
        )
    }

    return (
        <div className="boards">
            <h2>Your boards:</h2>
            {getBoards().map((board, index) => displaySingleBoard(board, index))}
            <div className="add-board">
                <form onSubmit={() => boardService
                    .handleBoardSubmit(props.users, props.loggedUser, boardName)}>
                    <div className='labelHolder'>
                        <label>Board Name:</label>
                        <input type="text" name="boardName"
                               value={boardName}
                               onChange={(event) => {
                                   setBoardName(event.target.value)
                               }}
                               placeholder="Board name"
                               required />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}


export default Boards;