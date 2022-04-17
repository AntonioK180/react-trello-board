import React from 'react';
import './EditCard.css';

const EditCard = (props) => {
	let title = 'Title';

	return (
		<div className="EditCard">
			<div className='title-bar'> 
				<span className='title-bar-icon'></span>
				{title}
			</div>

			<div className='content'> 
				
			</div>
		</div>
	);
};

EditCard.propTypes = {};

EditCard.defaultProps = {};

export default EditCard;
