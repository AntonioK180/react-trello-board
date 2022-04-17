import './CreateBoard.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

const CreateBoard = (props) => {
    const [boardName, setBoardName] = useState("");

    const handleBoardSubmit = (event) => {
        event.preventDefault();

        const user = props.users.find(user => user.username === props.loggedUser);
        const id = uuidv4();
        const boards = {
            id: id,
            board_name: boardName,
            columns: []
        }
        user.boards.push(boards);
        user.active_board = id;


        localStorage.setItem("users", JSON.stringify(props.users));
    }

    return (
        <div className="create-board">
            <form onSubmit={handleBoardSubmit}>
                <label>
                    Board Name:
                    <input type="text" name="boardName"
                           value={boardName}
                           onChange={(event) => {
                               setBoardName(event.target.value)
                           }}
                           placeholder="Board name"/>
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};


export default CreateBoard;