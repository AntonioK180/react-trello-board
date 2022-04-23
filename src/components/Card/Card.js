import React, {useState} from 'react';
import './Card.css';
import Portal from '../Portal/Portal';
import EditCard from '../EditCard/EditCard';
import {BoardService} from "../../services/BoardService";

const Card = (props) => {
    const boardService = new BoardService();
    const [displayEdit, setDisplayEdit] = useState(false);
    const [updateBoard, setUpdateBoard] = useState(true);

    const openEditScreen = () => {
        setDisplayEdit(true);
    }

    const closeEditScreen = () => {
        setDisplayEdit(false);
    }

    const moveCardRigth = () => {
        console.log('Move right');
        const currCard = boardService.getCardByID(props.user,
            props.loggedUser, props.card_id);
        const column = boardService.getCardInColumn(props.users,
            props.loggedUser, props.card_id);

        const nextColumn = boardService.getColumnByOrderNumber(props.users,
            props.loggedUser, column.order + 1).id;
        if (nextColumn)
            currCard.column_id = nextColumn.id;
        
        setUpdateBoard(!updateBoard);
    }

    const moveCardLeft = () => {
        console.log('Move left');
        const currCard = boardService.getCardByID(props.user,
            props.loggedUser, props.card_id);
        const column = boardService.getCardInColumn(props.users,
            props.loggedUser, props.card_id);

        const prevColumn = boardService.getColumnByOrderNumber(props.users,
            props.loggedUser, column.order + 1).id;
        if (prevColumn)
            currCard.column_id = prevColumn.id;
        
        setUpdateBoard(!updateBoard);
    }

    return (
        <>
            <div className="Card">
                <div className='card-body'>
                    <div onClick={openEditScreen} className='click-to-edit cursor-pointer'> {props.name} </div>
                    <span onClick={moveCardLeft} className='cursor-pointer arrow-left'></span>
                    <span onClick={moveCardRigth} className='cursor-pointer arrow-right'></span>
                </div>
            </div>
            <Portal>
                {displayEdit ? <EditCard card_id={props.card_id}
                                         column_id={props.column_id}
                                         users={props.users}
                                         loggedUser={props.loggedUser}
                                         closeCallback={closeEditScreen}/> : <></>}
            </Portal>
        </>
    );
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
