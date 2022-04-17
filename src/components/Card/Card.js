import React from 'react';
import './Card.css';
import { useContext, useState } from 'react';
import EditCard from '../EditCard/EditCard';

const Card = (props) => {
	const [shouldHide, setShouldHide] = useState(false);

	const openEditScreen = () => {
		setShouldHide(true);
	}

	return (
		<div className="Card" onClick={openEditScreen}>
			Card Component
			{ shouldHide ? 
				  <EditCard /> :
				  null
			}
		</div>
	);
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
