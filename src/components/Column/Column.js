import { useState } from 'react';
import Card from '../Card/Card';
import './Column.css';

const Column = (props) => {
	const [cardName, setCardName] = useState("");
	const [cards, setCards] = useState([{}]);

	const addCard = () => {
		const card = {
			key: cards.length,
			name: cardName
		}

		setCards([...cards, card]);
	}

	return (
		<div className="Column">
			<div className='column-header'>
				<h1 className='single-column-name'>{props.name}</h1>
			</div>
			{cards.map((card) => <Card key={card} name={card.name} />)}
			<form onSubmit={addCard} className="add-card-window">
				<input type="text"
					className='add-card-field'
					id="add-card-input"
					placeholder="Enter card title..."
					onChange={(event) => setCardName(event.target.value)} />
				<div className="buttons">
					<button type='submit' className="btn-add-card" >Add card</button>
				</div>
			</form>
		</div>
	);
}

export default Column;
