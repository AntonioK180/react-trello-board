import React from 'react';
import { useState } from 'react';
import CardAction from '../CardAction/CardAction';
import './EditCard.css';

const EditCard = (props) => {
	const [displaySave, setDisplaySave] = useState(false);
	
	let title = 'Title';
	let listName = 'Despacito!';

	const onClickDescription = () => {
		setDisplaySave(true);
	}
	
	const onClickCrossIcon = () => {
		setDisplaySave(false);
		document.getElementById('description-text').value = "";
	}

	return (
		<div className="EditCard">
			
			<span className='close-popup cross-icon cursor-pointer'></span>

			<div className='title-bar'> 
				<div className='title-bar-icon title-icon'></div>
				{title} 
				<div className='in-list-text'>in list <span className='list-name'>{listName}</span></div>
			</div>

			<h3 className='description-title'>
					<div className='description-title-icon title-icon'></div>
					Description
			</h3>

			<aside className='actions-content'> 
				<h4 className='actions-title'>Add to card</h4>
				<CardAction name='Members'></CardAction>
				<CardAction name='Labels'></CardAction>
				<CardAction name='Dates'></CardAction>
				<CardAction name='Attachmet'></CardAction>
				<CardAction name='Cover'></CardAction>
			</aside>

			<div className='card-description'>
				
				<textarea id='description-text' onClick={onClickDescription} className='description-value grey-bg cursor-pointer' rows="4" cols="80" placeholder='Add a more detailed description…'></textarea>
				{ displaySave ? <div className='buttons-wrapper'> 
					<button className='save-button cursor-pointer dark-blue-bg'>Save</button> 
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
