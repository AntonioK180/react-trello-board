import React from 'react';
import { useState } from 'react';
import './EditCard.css';

const EditCard = (props) => {
	const [displaySave, setDisplaySave] = useState(false);
	
	let title = 'Title';

	const onClickDescription = () => {
		setDisplaySave(true);
	}
	
	return (
		<div className="EditCard">
			<div className='title-bar'> 
				<div className='title-bar-icon title-icon'></div>
				{title}
			</div>

			<div className='card-description'>
				<h3 className='description-title'>
					<div className='description-title-icon title-icon'></div>
					Description
				</h3>
				
				<textarea onClick={onClickDescription} className='description-value' rows="4" cols="80" placeholder='Add a more detailed description…'></textarea>
				{ displaySave ? <> 
					<button className='save-button'>Save</button> 
					<span></span>
				</> : null }
			</div>

			<div className='content'> 
				
			</div>
		</div>
	);
};

EditCard.propTypes = {};

EditCard.defaultProps = {};

export default EditCard;
