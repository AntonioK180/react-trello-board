import React from 'react';
import './Card.css';
import { useContext, useState } from 'react';
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
		<div className="Card">
			<div className='card-body cursor-pointer' onClick={openEditScreen}> {props.name} </div>
			{ displayEdit ? <EditCard closeCallback = {closeEditScreen} /> : <></> }
		</div>
	);
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
