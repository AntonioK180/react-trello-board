import React, { useState } from 'react';
import Column from '../Column/Column';
import './Board.css';
import { v4 as uuidv4 } from 'uuid'


const Board = (props) => {
    const [columnName, setColumnName] = useState("");
    const [columns, setColumns] = useState([]);
    const [displayForm, setDisplayForm] = useState(false); 

    const getBoard = () => {
        const user = props.users.find(user => user.username === props.loggedUser);
        const activeBoard = user.active_board;

        return user.boards.find(board => board.id === activeBoard);
    }

    const addColumn = () => {
        const board = getBoard();

        const newColumn = {
            id: uuidv4(),
            name: columnName,
            order: board.columns.length,
        };
        board.columns.push(newColumn);

        setColumns([...board.columns, newColumn]);

        localStorage.setItem("users", JSON.stringify(props.users));
    }

    const toggleAddListForm = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <div className="board">
            {getBoard().columns.map(column => <Column key={column} name={column.name} order={column.order} />)}
            <div className="add-column">
                { displayForm ?
                    <form className="add-list">
                        <input type="text"
                            placeholder="Enter list title..."
                            className='list-name-input'
                            onChange={(event) => setColumnName(event.target.value)} />
                        <div className='buttons-wrapper add-list-form'>
                            <button className="save-button cursor-pointer dark-blue-bg" onClick={addColumn}>Add list</button>
                            <span onClick={toggleAddListForm} className='cross-icon cursor-pointer'></span>
                        </div>
                    </form>
                : 
                    <div onClick={toggleAddListForm} className='no-form-wrapper cursor-pointer light-grey-bg'>
                        <span className='plus-icon-add-list'></span>
                        <span>Add another list</span>
                    </div>

                }
            </div>

        </div>
    )
}


export default Board;
