import React from 'react';
import PropTypes from 'prop-types';
import './MembersSelect.css';

const MembersSelect = (props) => {
	const members = ['user1', 'user2'];

	return (
		<div className="MembersSelect">
			<span onClick={props.closeCallback} className='close-popup cross-icon cursor-pointer'></span>

			<div className='action-title'> Members </div>

			<h4 className='action-subtitle'>Board Members</h4>

			<div className='member-circles-wrapper'>
				<div className='single-member-circle cursor-pointer'></div>
				<div className='single-member-circle cursor-pointer'></div>
				<div className='single-member-circle cursor-pointer'></div>
				<div className='single-member-circle cursor-pointer'></div>
			</div>
		</div>
	);
};

MembersSelect.propTypes = {};

MembersSelect.defaultProps = {};

export default MembersSelect;
