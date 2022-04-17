import React from 'react';
import { useState } from 'react';
import CardAction from '../CardAction/CardAction';
import './EditCard.css';

const EditCard = (props) => {
	const [displaySave, setDisplaySave] = useState(false);
	
	let title = 'Title';

	const onClickDescription = () => {
		setDisplaySave(true);
	}
	
	const onClickCrossIcon = () => {
		setDisplaySave(false);
	}

	return (
		<div className="EditCard">
			
			<div className='title-bar'> 
				<div className='title-bar-icon title-icon'></div>
				{title}
			</div>

			<h3 className='description-title'>
					<div className='description-title-icon title-icon'></div>
					Description
			</h3>

			<aside className='actions-content'> 
				<CardAction></CardAction>
			</aside>

			<div className='card-description'>
				
				<textarea onClick={onClickDescription} className='description-value' rows="4" cols="80" placeholder='Add a more detailed description…'></textarea>
				{ displaySave ? <div className='buttons-wrapper'> 
					<button className='save-button cursor-pointer'>Save</button> 
					<span onClick={onClickCrossIcon} className='cross-icon cursor-pointer'></span>
				</div> : null }
			</div>

			<div className='side-menu'>
				
			</div>
		</div>
	);
};

EditCard.propTypes = {};

EditCard.defaultProps = {};

export default EditCard;
