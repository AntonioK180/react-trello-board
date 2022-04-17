import React from 'react';
import PropTypes from 'prop-types';
import './DateSelector.css';

const DateSelector = (props) => {

	const labelsMarkup = 1;

	return (
		<div className="DateSelector">
			<span onClick={props.closeCallback} className='close-popup cross-icon cursor-pointer'></span>

			<div className='action-title'> Date </div>

			<h4 className='action-subtitle'> Due Date </h4>

			<input type="date" class="datepicker-input"/>
		</div>
	);
}

DateSelector.propTypes = {};

DateSelector.defaultProps = {};

export default DateSelector;
