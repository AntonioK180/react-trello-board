import './Homepage.css';
import Board from "../Board/Board";
import { BoardService } from "../../services/BoardService";

const Homepage = (props) => {
    const boardService = new BoardService();

    return (
        <>
            {boardService.getCurrentBoard(props.users, props.loggedUser) ?
                <div className="homepage-board">
                    <Board loggedUser={props.loggedUser}
                        users={props.users} />
                </div>
                :
                <></>}
        </>
    )
}

export default Homepage;