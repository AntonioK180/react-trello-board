import React, {useState} from 'react';
import './Card.css';
import Portal from '../Portal/Portal';
import EditCard from '../EditCard/EditCard';


const Card = (props) => {
    const [displayEdit, setDisplayEdit] = useState(false);

    const openEditScreen = () => {
        setDisplayEdit(true);
    }

    const closeEditScreen = () => {
        setDisplayEdit(false);
    }

    return (
        <>
            <div className="Card">
                <div className='card-body cursor-pointer' onClick={openEditScreen}> {props.cardName} </div>
            </div>
            {props.renderInArchive ?
                <></> :
                <Portal>
                    {displayEdit ? <EditCard
                        users={props.users}
                        loggedUser={props.loggedUser}
                        card_id={props.card_id}
                        column_id={props.column_id}
                        closeCallback={closeEditScreen}
                        setArchive={props.setArchive}
                        cardArchived={props.cardArchived}
                        setCardRenamed={props.setCardRenamed}
                        cardRenamed={props.cardRenamed}/> : <></>}
                </Portal>
            }
        </>
    );
};


Card.propTypes = {};

Card.defaultProps = {};

export default Card;
