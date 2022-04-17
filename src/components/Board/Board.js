import React from 'react';
import { useState } from 'react'; 
import Column from '../Column/Column';
import './Board.css';

const Board = (props) => {
	const [columnName, setColumnName] = useState("");
	const [columns, setColumns] = useState(props.columns);
	
	const addColumn = () => {
		//Implementation depends on the localStorage structure.
		const column = {
			key: columns.length,
			name: columnName,
			cards: []
		}

		setColumns([...columns, column]);
	}

	const showAddWindow = () => {
		document.getElementById("add-window").style.display="flex";
		document.getElementById("btn-add-list").style.display="none";
	}

	const removeAddWindow = () => {
		document.getElementById("add-window").style.display="none";
		document.getElementById("btn-add-list").style.display="flex";
	}
	
	return (
		<div className="board">
			{columns.map(column => <Column key={column.key} name={column.name} cards={column.cards}/>)}
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
