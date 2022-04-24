import React from 'react';
import './Card.css';
import { useState } from 'react';
import Portal from '../Portal/Portal';
import EditCard from '../EditCard/EditCard';
import {BoardService} from "../../services/BoardService";

const Card = (props) => {
	const boardService = new BoardService();
	const [displayEdit, setDisplayEdit] = useState(false);

	const openEditScreen = () => {
		setDisplayEdit(true);
	}

	const closeEditScreen = () => {
		setDisplayEdit(false);
	}

	const moveCardLeft = () => {
		let loggedUser = localStorage.getItem("logged_user");
		let userData = JSON.parse(localStorage.getItem("users"));

		let loggedUserData = boardService.getCurrentUser(userData, loggedUser);
	
		let cardData = loggedUserData.cards.find(card => card.id === props.id);
		let columnData = boardService.getColumnById(userData, loggedUser, cardData.column_id);

		let columnOrder = columnData.order;

		if ( columnOrder > 0 ) {
			columnOrder--;
		}

		let newColumn = boardService.getColumnByOrderNumber(userData, loggedUser, columnOrder);
		console.log(newColumn);

		cardData.column_id = newColumn.id;
		
		// finally - we write all of this into local storage and reset component state
	}

	const moveCardRigth = () => {
		console.log('Move right');
	}

	return (
		<>
			<div className="Card">
				<div className='card-body'>
					<div onClick={openEditScreen} className='click-to-edit cursor-pointer'> {props.name} </div>
					<span onClick={moveCardLeft} className='cursor-pointer arrow-left'></span>
					<span onClick={moveCardRigth} className='cursor-pointer arrow-right'></span>
				</div>
			</div>
			{props.renderInArchive ? 
				<></> : 
				<Portal>
					{ displayEdit ? <EditCard id={props.id} 
											loggedUser={props.loggedUser} 
											closeCallback = {closeEditScreen} 
											setArchive={props.setArchive}
											cardArchived={props.cardArchived}/> : <></> }
				</Portal>
			}
		</>
	);
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
