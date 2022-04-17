import React, {useState} from 'react';
import Column from '../Column/Column';
import './Board.css';
import {v4 as uuidv4} from 'uuid'
import { BoardService } from '../../services/BoardService';


const Board = (props) => {
    const boardService = new BoardService();
    const [columnName, setColumnName] = useState("");

    const addColumn = () => {
        const board = boardService.getCurrentBoard(props.users, props.loggedUser);

        const newColumn = {
            id: uuidv4(),
            name: columnName,
            order: board.columns.length,
        };
        board.columns.push(newColumn);

        localStorage.setItem("users", JSON.stringify(props.users));
    }

    const showAddWindow = () => {
        document.getElementById("add-window").style.display = "flex";
        document.getElementById("btn-add-list").style.display = "none";
    }

    const removeAddWindow = () => {
        document.getElementById("add-window").style.display = "none";
        document.getElementById("btn-add-list").style.display = "flex";
    }

    return (
        <div className="board">
            {getBoard().columns.map(column => <Column key={column.id} name={column.name} order={column.order}/>)}
            <div className="add-column">
                <button id="btn-add-list" onClick={showAddWindow}>+ Add another list</button>
                <div id="add-window">
                    <input type="text"
                           id="add-column-input"
                           placeholder="Enter list title..."
                           onChange={(event) => setColumnName(event.target.value)}/>
                    <div className="buttons">
                        <button className="btn-add-column" onClick={addColumn}>Add list</button>
                        <button className="btn-exit-add-window" onClick={removeAddWindow}>X</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Board;
