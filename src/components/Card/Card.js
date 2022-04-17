import React from 'react';
import './Card.css';
import { useContext, useState } from 'react';
import EditCard from '../EditCard/EditCard';

const Card = (props) => {
	const [displayEdit, setDisplayEdit] = useState(true);

	const openEditScreen = () => {
		setDisplayEdit(true);
	}

	const closeEditScreen = () => {
		console.log("clicked!");
		setDisplayEdit(false);
		console.log(displayEdit);
	}


	return (
		<div className="Card">
			<p onClick={openEditScreen}> click me </p>
			Card Component
			{ displayEdit ? <EditCard closeCallback = {closeEditScreen} /> : <></> }
		</div>
	);
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
