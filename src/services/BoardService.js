export class BoardService {

	getCurrentBoard(users, loggedUser) {
        const user = users.find(user => user.username === loggedUser);
        const activeBoard = user.active_board;

        return user.boards.find(board => board.id === activeBoard);	
	}

}
