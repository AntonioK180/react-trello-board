import { useState } from 'react';
import Card from '../Card/Card';
import './Column.css';
import { BoardService } from "../../services/BoardService";
import { v4 as uuidv4 } from "uuid";
import { ArchiveService } from '../../services/ArchiveService';

const Column = (props) => {
    const boardService = new BoardService();
    const [cardName, setCardName] = useState("");
    const [cards, setCards] = useState([{}]);
    const archiveService = new ArchiveService(props.loggedUser);
    const [cardArchived, setCardArchived] = useState(false);

    const addCard = () => {
        const user = boardService.getCurrentUser(props.users, props.loggedUser);

        const card = {
            id: uuidv4(),
            column_id: props.id,
            name: cardName,
            description: "",
            color: "",
            due_date: "",
            members: [],
            labels: [],
        };

        setCards([...cards, card]);

        user.cards.push(card);
        localStorage.setItem('users', JSON.stringify(props.users));
    }

    return (
        <div className="Column">
            <div className='column-header'>
                <h1 className='single-column-name'>{props.name}</h1>
            </div>
            {boardService.getCurrentUser(props.users, props.loggedUser).cards
                .filter((card) => card.column_id === props.id)
                .filter((card) => archiveService.cardInArchive(card.id) === undefined)
                .map((card) => <Card key={card.id}
                    id={card.id}
                    columnName={props.name}
                    name={card.name}
                    loggedUser={props.loggedUser}
                    setArchive={setCardArchived} 
                    cardArchived={cardArchived}
                    renderInArchive={false}/>)}
            <form onSubmit={addCard} className="add-card-window">
                <input type="text"
                    required
                    className='add-card-field'
                    id="add-card-input"
                    placeholder="Enter card title..."
                    onChange={(event) => setCardName(event.target.value)} />
                <div className="buttons">
                    <button type='submit' className="btn-add-card">Add card</button>
                </div>
            </form>
        </div>
    );
}

export default Column;
