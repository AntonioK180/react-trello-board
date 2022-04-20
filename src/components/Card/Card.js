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

	const moveCardRigth = () => {
		console.log('Move right');
	}

	const moveCardLeft = () => {
		console.log('Move left');
	}

	return (
		<>
			<div className="Card">
				<div className='card-body cursor-pointer' onClick={openEditScreen}> 
					{props.name} 
					<span onClick={moveCardRigth} className='cursor-pointer arrow-right'></span>
					<span onClick={moveCardLeft} className='cursor-pointer arrow-left'></span>
				</div>
			</div>
			<Portal>
				{ displayEdit ? <EditCard closeCallback = {closeEditScreen} /> : <></> }
			</Portal>
		</>
	);
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
