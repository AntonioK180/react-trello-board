import React, {useState} from 'react';
import Column from '../Column/Column';
import './Board.css';
import {v4 as uuidv4} from 'uuid'
import {BoardService} from '../../services/BoardService';


const Board = (props) => {
    const boardService = new BoardService();
    const [columnName, setColumnName] = useState("");
    const [columns, setColumns] = useState([]);
    const [displayForm, setDisplayForm] = useState(false); 

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

    const toggleAddListForm = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <div className="board">
            {boardService.getCurrentBoard(props.users, props.loggedUser)
                .columns
                .map(column => <Column key={column.id} name={column.name} order={column.order}/>)}

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
