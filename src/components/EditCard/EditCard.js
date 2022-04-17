import React from 'react';
import './EditCard.css';

const EditCard = (props) => {
	let title = 'Title';
	let description = 'I am describing';

	return (
		<div className="EditCard">
			<div className='title-bar'> 
				<span className='title-bar-icon'></span>
				{title}
			</div>

			<div className='card-description'>
				<span className='description-title-icon'></span>
				<h3 className='description-title'>Description</h3>
				
				<textarea className='description-value' rows="4" cols="80" placeholder='Add a more detailed description…'></textarea>
			</div>

			<div className='content'> 
				
			</div>
		</div>
	);
};

EditCard.propTypes = {};

EditCard.defaultProps = {};

export default EditCard;
