import {ArchiveService} from '../../services/ArchiveService';
import "./Archive.css";
import Card from '../Card/Card';

const Archive = (props) => {
    const archiveService = new ArchiveService(props.loggedUser);

    const cards = archiveService.getCards();

    return (
        <div id="archive">
            {cards.map(card => <Card key={card.id} 
                                    loggedUser={props.loggedUser}
                                    id={card.id}
                                    name={card.name}
                                    renderInArchive={true}/>)}
            <div className="controls">
                <button className="btn-back" 
                    onClick={() => window.location.href = "/home"}>Back</button>
            </div>
        </div>
    )
}

export default Archive;