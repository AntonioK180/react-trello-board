import React from 'react';
import PropTypes from 'prop-types';
import './LabelSelector.css';

const LabelSelector = () => {
	const labels = [
					{color: 'red', content: 'label One'}, 
					{color: 'green', content: 'label Two'}, 
					{color: 'yellow', content: 'label Three'}
				];

	const labelsMarkup = 1;

	return (
		<div className="LabelSelector">
			<div className='action-title'> Labels </div>

			<h4 className='action-subtitle'>Labels</h4>

			{labels.map((label) => {
				let colorClassName = 'color-label-' + label.color;
				colorClassName += ' single-label cursor-pointer';
				return (
					<div key={label} className={colorClassName}>
						<span className='pencil-icon'></span>
						{label.content}
					</div>
				);
			})}

		</div>
	);
};

LabelSelector.propTypes = {};

LabelSelector.defaultProps = {};

export default LabelSelector;
