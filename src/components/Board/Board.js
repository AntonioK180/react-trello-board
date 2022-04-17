import React, {useState} from 'react';
import Column from '../Column/Column';
import './Board.css';
import {v4 as uuidv4} from 'uuid'
import {BoardService} from '../../services/BoardService';


const Board = (props) => {
    const boardService = new BoardService();
    const [columnName, setColumnName] = useState("");
    const [columns, setColumns] = useState([]);

    const addColumn = () => {
        const board = boardService.getCurrentBoard(props.users, props.loggedUser);

        const newColumn = {
            id: uuidv4(),
            name: columnName,
            order: board.columns.length,
        };
        board.columns.push(newColumn);

        setColumns([...board.columns, newColumn]);

        localStorage.setItem("users", JSON.stringify(props.users));
    }

    return (
        <div className="board">
            {boardService.getCurrentBoard(props.users, props.loggedUser)
                .columns
                .map(column => <Column key={column.id} name={column.name} order={column.order}/>)}

            <div className="add-column">
                <div>
                    <form className="add-list">
                        <input type="text"
                            placeholder="Enter list title..."
                            className='list-name-input'
                            onChange={(event) => setColumnName(event.target.value)} />
                        <div className='buttons-wrapper add-list-form'>
                            <button className="save-button cursor-pointer dark-blue-bg" onClick={addColumn}>Add list</button>
                            <span className='cross-icon cursor-pointer'></span>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Board;
