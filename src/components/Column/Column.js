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

	const showAddWindow = () => {
		document.getElementById("add-card-window").style.display = "flex";
		document.getElementById("btn-add-card").style.display = "none";
	}

	const hideAddWindow = () => {
		document.getElementById("add-card-window").style.display = "none";
		document.getElementById("btn-add-card").style.display = "flex";
	}

	return (
		<div className="Column">
			<h1>{props.name}</h1>
			{cards.map((card) => <Card key={card} info={card} />)}
			<button id="btn-add-card" onClick={showAddWindow}>+ Add a card</button>
			<div id="add-card-window">
				<input type="text"
					id="add-card-input"
					placeholder="Enter card title..."
					onChange={(event) => setCardName(event.target.value)} />
				<div className="buttons">
					<button className="btn-add-card" onClick={addCard}>Add card</button>
					<button className="btn-exit-add-window" onClick={hideAddWindow}>X</button>
				</div>
			</div>
		</div>
	);
}

export default Column;
