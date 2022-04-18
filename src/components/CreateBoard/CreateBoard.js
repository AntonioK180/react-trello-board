import './CreateBoard.css';
import {useState} from "react";
import {BoardService} from "../../services/BoardService";

const CreateBoard = (props) => {
    const boardService = new BoardService();
    const [boardName, setBoardName] = useState("");

    return (
        <div className="CreateBoard">
            <form className='create-board-form' onSubmit={() => boardService
                .handleBoardSubmit(props.users, props.loggedUser, boardName)}>
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