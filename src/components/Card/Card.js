import React from 'react';
import './Card.css';
import { useContext, useState } from 'react';
import Portal from '../Portal/Portal';
import EditCard from '../EditCard/EditCard';

const Card = (props) => {
	const [displayEdit, setDisplayEdit] = useState(false);

	const openEditScreen = () => {
		setDisplayEdit(true);
	}

	const closeEditScreen = () => {
		setDisplayEdit(false);
	}

	return (
		<>
			<div className="Card">
				<div className='card-body cursor-pointer' onClick={openEditScreen}> {props.name} </div>
			</div>
			{props.renderInArchive ? 
				<></> : 
				<Portal>
					{ displayEdit ? <EditCard id={props.id} 
											cardName={props.name}
											columnName={props.columnName}
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
