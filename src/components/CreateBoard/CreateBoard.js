import './CreateBoard.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

const CreateBoard = () => {
    const [boardName, setBoardName] = useState("");

    const handleBoardSubmit = (event) => {
        event.preventDefault();

        const curr_user = localStorage.getItem("logged_user");
        const json_structure = JSON.parse(localStorage.getItem("users"));

        const user = json_structure.find(user => user.username === curr_user);
        const boards = {
            id: uuidv4(),
            board_name: boardName,
            columns: []
        }
        user.boards.push(boards);


        localStorage.setItem("users", JSON.stringify(json_structure));
    }

    return (
        <div className="create-board">
            <h1>Create Board</h1>
            <form>
                <label>
                    Board Name:
                    <input type="text" name="boardName"
                           value={boardName}
                           onChange={(event) => {
                               setBoardName(event.target.value)
                           }}
                           placeholder="Board name"/>
                </label>
                <button type="submit" onSubmit={handleBoardSubmit}>Create</button>
            </form>
        </div>
    );
};


export default CreateBoard;