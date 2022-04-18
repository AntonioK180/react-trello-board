import './Boards.css';
import {useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import {BoardService} from "../../services/BoardService";

const Boards = (props) => {
    const boardService = new BoardService();
    let navigate = useNavigate();
    const [boardName, setBoardName] = useState("");


    const getBoards = () => {
        const user = props.users.find(user => user.username === props.loggedUser);

        return user.boards;
    }

    const getBoard = (boardName) => {
        const user = props.users.find(user => user.username === props.loggedUser);

        return user.boards.find(board => board.board_name === boardName);
    }

    function handleBoardsOnClick(boardName) {
        const user = props.users.find(user => user.username === props.loggedUser);
        const board = getBoard(boardName);

        boardService.configureActiveBoard(props.users, user, board);

        window.location.href = "/home";
        navigate("/home");
    }

    // TODO: same function with createBoards
    const handleBoardSubmit = () => {
        const user = props.users.find(user => user.username === props.loggedUser);

        const board = getBoard(boardName);
        if (board) {
            boardService.configureActiveBoard(props.users, user, board);
            return;
        }

        const newBoard = {
            id: uuidv4(),
            board_name: boardName,
            columns: []
        }
        user.boards.push(newBoard);

        boardService.configureActiveBoard(props.users, user, newBoard);
    }

    const displaySingleBoard = (board) => {
        return (
            <div className="board" onClick={() => handleBoardsOnClick(board.board_name)}>
                <h2>{board.board_name}</h2>
            </div>
        )
    }

    return (
        <div className="boards">
            {getBoards().map(board => displaySingleBoard(board))}
            <div className="add-board">
                <form onSubmit={handleBoardSubmit}>
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
