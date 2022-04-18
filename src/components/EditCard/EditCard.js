import React from 'react';
import { useState } from 'react';
import CardAction from '../CardAction/CardAction';
import LabelSelector from '../LabelSelector/LabelSelector';
import MembersSelect from '../MembersSelect/MembersSelect';
import DateSelector from '../DateSelector/DateSelector';
import './EditCard.css';

const EditCard = (props) => {
	const [displaySave, setDisplaySave] = useState(false);
	const [displayLabels, setDisplayLabels] = useState(false);
	const [displayMembers, setDisplayMembers] = useState(false);
	const [displayDate, setDisplayDate] = useState(false);

	const currentLabels = ['green', 'red', 'yellow'];
	const currentMembers = ['alex', 'balex'];
	
	let title = 'Title';
	let listName = 'Despacito!';

	const onClickDescription = () => {
		setDisplaySave(true);
	}
	
	const onClickCrossIcon = () => {
		setDisplaySave(false);
		document.getElementById('description-text').value = "";
	}

	const showLabelSelect = () => {
		setDisplayMembers(false);
		setDisplayLabels(true);
		setDisplayDate(false);
	}

	const showMembersSelect = () => {
		setDisplayMembers(true);
		setDisplayLabels(false);
		setDisplayDate(false);
	}

	const showDateSelect = () => {
		setDisplayMembers(false);
		setDisplayLabels(false);
		setDisplayDate(true);
	}

	const closeLabelSelector = () => {
		setDisplayLabels(false);
	}

	const closeMemberSelect = () => {
		setDisplayMembers(false);
	}

	const closeDateSelector = () => {
		setDisplayDate(false);
	}

	return (
		<>
			{displayLabels ? <LabelSelector closeCallback = {closeLabelSelector}/> : <></> }
			{displayMembers ? <MembersSelect closeCallback = {closeMemberSelect}/> : <></> }
			{displayDate ? <DateSelector closeCallback = {closeDateSelector}/> : <></> }
			
			<div className='window-overlay'>a</div>


			<div className="EditCard">
				
				<span onClick={props.closeCallback} className='close-popup cross-icon cursor-pointer'></span>

				<div className='title-bar'> 
					<div className='title-bar-icon title-icon'></div>
					{title} 
					<div className='in-list-text'>in list <span className='list-name'>{listName}</span></div>
				</div>

				<div className='card-properties'>
					
					{currentMembers.length !== 0 ?
						<div className='members-array-wrapper'>
							<h3 className='card-properties-heading'>Members</h3>

							<div className='multiple-members'>
							<div className='member-circles-preview'>
								<div className='single-member-circle cursor-pointer'></div>
								<div className='single-member-circle cursor-pointer'></div>
								<div className='single-member-circle cursor-pointer'></div>
								<span onClick={showMembersSelect} className='plus-icon-label grey-bg cursor-pointer'></span>
							</div>
							</div>
						</div>
					: null }

					{currentLabels.length !== 0 ?
						<div className='labels-array-wrapper'>
							<h3 className='card-properties-heading'>Labels</h3>

							<div className='multiple-labels'>
								<div className='single-label-preview'>red</div>
								<div className='single-label-preview'>green</div>
								<div className='single-label-preview'>yellow</div>
								<span onClick={showLabelSelect} className='plus-icon-label grey-bg cursor-pointer'></span>
							</div>

						</div>
					: null }

				</div>

				<h3 className='description-title'>
					<div className='description-title-icon title-icon'></div>
					Description
				</h3>

				<aside className='actions-content'> 
					<h4 className='actions-title'>Add to card</h4>
					<a onClick={showMembersSelect}><CardAction name='Members'></CardAction></a>
					<a onClick={showLabelSelect}><CardAction name='Labels'></CardAction></a>
					<a onClick={showDateSelect}><CardAction name='Dates'></CardAction></a>
					<CardAction name='Attachmet'></CardAction>
					<CardAction name='Cover'></CardAction>
					<CardAction name='Attachmet'></CardAction>
					<CardAction name='Cover'></CardAction>

				</aside>

				<div className='card-description'>
					
					<textarea id='description-text' onClick={onClickDescription} className='description-value grey-bg cursor-pointer' rows="4" cols="180" placeholder='Add a more detailed description…'></textarea>
					{ displaySave ? <div className='buttons-wrapper'> 
						<button className='save-button cursor-pointer dark-blue-bg'>Save</button> 
						<span onClick={onClickCrossIcon} className='cross-icon cursor-pointer'></span>
					</div> : null }
				</div>

				<div className='side-menu'>
					
				</div>
			</div>
		</>
	);
};

EditCard.propTypes = {};

EditCard.defaultProps = {};

export default EditCard;
