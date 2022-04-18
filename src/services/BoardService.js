export class BoardService {
    getCurrentUser(users, loggedUser) {
        return users.find(user => user.username === loggedUser);
    }

    getCurrentBoard(users, loggedUser, searchedBoard = this.getCurrentUser(users, loggedUser).active_board) {
        const user = users.find(user => user.username === loggedUser);

        return user.boards.find(board => board.board_name === searchedBoard);
    }

    configureActiveBoard(users, user, board) {
        user.active_board = board.board_name;
        if (user.recent_boards.find(recentBoard => recentBoard === user.active_board)) {
            localStorage.setItem("users", JSON.stringify(users));
            return;
        }
        if (user.boards.length > 3) {
            user.recent_boards.shift();
        }
        user.recent_boards.push(user.active_board);
        localStorage.setItem("users", JSON.stringify(users));
    };
}
