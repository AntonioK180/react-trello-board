import React from 'react';
import './LabelSelector.css';
import {BoardService} from "../../services/BoardService";

const LabelSelector = (props) => {
    const boardService = new BoardService();

    const labels = [
        {color: 'red', content: 'label One'},
        {color: 'green', content: 'label Two'},
        {color: 'yellow', content: 'label Three'}
    ];

    function labelClicked(label) {
        const currCard = boardService.getCardByID(props.users, props.loggedUser, props.card_id);
        currCard.labels.push(label);
        localStorage.setItem('users', JSON.stringify(props.users));
    }

    return (
        <div className="LabelSelector">
            <span onClick={props.closeCallback} className='close-popup cross-icon cursor-pointer'></span>

            <div className='action-title'> Labels</div>

            <h4 className='action-subtitle'>Labels</h4>

            {labels.map((label) => {
                let colorClassName = 'color-label-' + label.color;
                colorClassName += ' single-label cursor-pointer';
                return (
                    <div className={colorClassName}
                         onClick={() => labelClicked(label)}>
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
