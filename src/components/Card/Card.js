import React from 'react';
import './Card.css';
import { useContext, useState } from 'react';
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
        const currCard = boardService.getCardByID(props.users,
            props.loggedUser, props.card_id);
        const column = boardService.getCardInColumn(props.users,
            props.loggedUser, props.card_id);

        const nextColumn = boardService.getColumnIDByOrderNumber(props.users,
            props.loggedUser, column.order + 1);

        if (nextColumn) {
            currCard.column_id = nextColumn.id;
        }
        localStorage.setItem("users", JSON.stringify(props.users));

        setUpdateBoard(!updateBoard);
    }

    const moveCardLeft = () => {
        const currCard = boardService.getCardByID(props.users,
            props.loggedUser, props.card_id);
        const column = boardService.getCardInColumn(props.users,
            props.loggedUser, props.card_id);

        const prevColumn = boardService.getColumnIDByOrderNumber(props.users,
            props.loggedUser, column.order - 1);

        if (prevColumn) {
            currCard.column_id = prevColumn.id;
        }

        localStorage.setItem("users", JSON.stringify(props.users));

        setUpdateBoard(!updateBoard);
    }

    return (
        <>
            <div className="Card">
                <div className='card-body cursor-pointer'>
                    <div onClick={openEditScreen} className='click-to-edit cursor-pointer'> {props.cardName} </div>
                    <span onClick={moveCardLeft} className='cursor-pointer arrow-left'></span>
                    <span onClick={moveCardRigth} className='cursor-pointer arrow-right'></span>
                </div>
            </div>
            {props.renderInArchive ?
                <></> :
                <Portal>
                    {displayEdit ? <EditCard card_id={props.card_id}
                                             column_id={props.column_id}
                                             users={props.users}
                                             loggedUser={props.loggedUser}
                                             closeCallback={closeEditScreen}
                                             setArchive={props.setArchive}
											 cardArchived={props.cardArchived}
                    /> : <></>}
                </Portal>
            }
        </>
    );
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
