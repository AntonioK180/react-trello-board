export class BoardService {
    getCurrentUser(users, loggedUser) {
        return users.find(user => user.username === loggedUser);
    }

	getCurrentBoard(users, loggedUser, searchedBoard=this.getCurrentUser(users, loggedUser).active_board) {
        const user = users.find(user => user.username === loggedUser);

        return user.boards.find(board => board.board_name === searchedBoard);
	}
}
