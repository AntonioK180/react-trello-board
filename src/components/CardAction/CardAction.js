import React from 'react';
import './CardAction.css';

const CardAction = (props) => {
	let iconClass = 'action-icon-' + props.name;

	return (	
		<div className="CardAction">
			<div className={iconClass}></div>
			<div className='action-text'>{props.name}</div>
		</div>
	);
};

CardAction.propTypes = {};

CardAction.defaultProps = {};

export default CardAction;
