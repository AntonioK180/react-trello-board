import {ArchiveService} from '../../services/ArchiveService';
import "./Archive.css";
import Card from '../Card/Card';
import { useState } from 'react';

const Archive = (props) => {
    const [rerender, setRerender] = useState(false);
    const archiveService = new ArchiveService(props.loggedUser);

    const cards = archiveService.getCards();

    return (
        <div id="archive">
            {cards.map(card => 
                <div className = "card-archive">
                    <Card key={card.id} 
                                    loggedUser={props.loggedUser}
                                    id={card.id}
                                    name={card.name}
                                    renderInArchive={true}/>
                    <button className="fa fa-trash-o" style = {{fontSize: "22px"}}
                            onClick={() => {
                                archiveService.removeCard(card.id);
                                setRerender(!rerender);
                            }}></button>
                </div>)}
            <div className="controls">
                <button className="btn-back" 
                    onClick={() => window.location.href = "/home"}>Back</button>
            </div>
        </div>
    )
}

export default Archive;