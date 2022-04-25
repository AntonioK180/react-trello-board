import {v4 as uuidv4} from "uuid";

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

    handleBoardsOnClick(users, loggedUser, boardName) {
        const user = this.getCurrentUser(users, loggedUser);
        const board = this.getCurrentBoard(users, loggedUser, boardName);

        this.configureActiveBoard(users, user, board);

        window.location.href = "/home";
    }

    handleBoardSubmit(users, loggedUser, boardName) {
        const user = this.getCurrentUser(users, loggedUser);

        const board = this.getCurrentBoard(users, loggedUser, boardName);
        if (board) {
            this.configureActiveBoard(users, user, board);
            return;
        }

        const newBoard = {
            id: uuidv4(),
            board_name: boardName,
            columns: []
        }
        user.boards.push(newBoard);
        this.configureActiveBoard(users, user, newBoard);
    }

    getCardByID(users, loggedUser, cardID) {
        const user = this.getCurrentUser(users, loggedUser);
        return user.cards.find(card => card.id === cardID);
    }

    getColumnById(users, loggedUser, columnID) {
        const board = this.getCurrentBoard(users, loggedUser);

        return board.columns.find(column => column.id === columnID);
    }

    getCardInColumnByCardID(users, loggedUser, cardID) {
        const board = this.getCurrentBoard(users, loggedUser);
        const card = this.getCardByID(users, loggedUser, cardID);

        return board.columns.find(column => column.id = card.column_id);
    }

    getCardInColumnByCardColumnID(users, loggedUser, cardColumnID) {
        const board = this.getCurrentBoard(users, loggedUser);

        return board.columns.find(column => column.id === cardColumnID);
    }

    getColumnByOrderNumber(users, loggedUser, orderNumber) {
        const board = this.getCurrentBoard(users, loggedUser);

        return board.columns.find(column => column.order === orderNumber);
    }

    removeCardByID(users, loggedUser, cardID) {
        const user = this.getCurrentUser(users, loggedUser);

        user.cards = user.cards.filter(card => card.id !== cardID);
        localStorage.setItem("users", JSON.stringify(users));
    }

    removeColumnByID(users, loggedUser, columnID) {
        const board = this.getCurrentBoard(users, loggedUser);

        board.columns = board.columns.filter(column => column.id !== columnID);
        localStorage.setItem("users", JSON.stringify(users));
    }

    removeBoardByID(users, loggedUser, boardID) {
        const user = this.getCurrentUser(users, loggedUser);

        user.boards = user.boards.filter(board => board.id !== boardID);
        localStorage.setItem("users", JSON.stringify(users));
    }

    renameCardByID(users, loggedUser, cardID, newName) {
        const user = this.getCurrentUser(users, loggedUser);
        const card = user.cards.find(card => card.id === cardID);
        card.name = newName;
        localStorage.setItem("users", JSON.stringify(users));
    }
}
