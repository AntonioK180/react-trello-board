import './CreateBoard.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

const CreateBoard = (props) => {
    const [boardName, setBoardName] = useState("");

    const getBoard = (param) => {
        const user = props.users.find(user => user.username === props.loggedUser);

        return user.boards.find(board => board.board_name === param);
    }

    const handleBoardSubmit = () => {
        const user = props.users.find(user => user.username === props.loggedUser);

        const board = getBoard(boardName);
        if (board) {
            user.active_board = board.id;
            localStorage.setItem("users", JSON.stringify(props.users));
            return;
        }

        const newBoard = {
            id: uuidv4(),
            board_name: boardName,
            columns: []
        }
        user.boards.push(newBoard);
        user.active_board = newBoard.id;

        localStorage.setItem("users", JSON.stringify(props.users));
    }

    return (
        <div className="CreateBoard">
            <form className='create-board-form' onSubmit={handleBoardSubmit}>
                <label className='board-name-label'>Board Name:</label>
                    <input type="text" name="boardName" className='board-name-input'
                           value={boardName}
                           onChange={(event) => {
                               setBoardName(event.target.value)
                           }}
                           placeholder="Board name"/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};


export default CreateBoard;