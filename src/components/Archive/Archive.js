import {ArchiveService} from '../../services/ArchiveService';
import "./Archive.css";
import Card from '../Card/Card';
import {useState} from 'react';

const Archive = (props) => {
    const [rerender, setRerender] = useState(false);
    const archiveService = new ArchiveService(props.loggedUser);

    const cards = archiveService.getCards();

    return (
        <div id="archive">
            <div className="cards">
                {cards.map(card =>
                    <div key={card.id} className="card-archive">
                        <Card
                              loggedUser={props.loggedUser}
                              id={card.id}
                              cardName={card.name}
                              renderInArchive={true}/>
                        <button className="fa fa-refresh bg-props"
                                onClick={() => {
                                    archiveService.restoreCard(card.id);
                                    setRerender(!rerender);
                                }}></button>
                        <button className="fa fa-trash-o bg-props"
                                onClick={() => {
                                    archiveService.eraseCard(card.id);
                                    setRerender(!rerender);
                                }}></button>
                    </div>)}
                <div className="controls">
                    <button className="btn-back"
                            onClick={() => window.location.href = "/home"}>Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Archive;