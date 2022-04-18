import './CreateBoard.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid'
import {BoardService} from "../../services/BoardService";

const CreateBoard = (props) => {
    const boardService = new BoardService();
    const [boardName, setBoardName] = useState("");

    const handleBoardSubmit = (event) => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);

        const board = boardService.getCurrentBoard(props.users, props.loggedUser, boardName);
        if (board) {
            user.active_board = board.board_name;
            localStorage.setItem("users", JSON.stringify(props.users));
            return;
        }

        const newBoard = {
            id: uuidv4(),
            board_name: boardName,
            columns: []
        }
        user.boards.push(newBoard);
        user.active_board = newBoard.board_name;

        localStorage.setItem("users", JSON.stringify(props.users));
    }

    return (
        <div className="CreateBoard">
            <form className='create-board-form' onSubmit={handleBoardSubmit}>
                <label className='board-name-label'>Board Name:</label>
                    <input type="text" name="boardName" className='board-name-input'
                           required
                           value={boardName}
                           onChange={(event) => {
                               setBoardName(event.target.value)
                           }}
                           placeholder="Board name"/>
                <button className='button-create-board cursor-pointer' type="submit">Create</button>
            </form>
        </div>
    );
};


export default CreateBoard;