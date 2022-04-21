export class ArchiveService {
    constructor(username){
        this.users = JSON.parse(localStorage.getItem('users'));
        this.username = username;
    }

    addCard(card_id){
        this.users.find(user => user.username === this.username)
            .archived_cards.push({ id: card_id });

        localStorage.setItem('users', JSON.stringify(this.users));
    }

    removeCard(card_id){

    }

    getCards(){
        const user = this.users.find(user => user.username === this.username);
        return user.cards.filter(card => {
            for (const archived_card of user.archived_cards)
                if (archived_card.id === card.id) 
                    return true;
            
            return false;
        })  
    }

    cardInArchive(id){
        return this.users.find(user => user.username === this.username).archived_cards
                         .find(card => card.id === id);
    }
}
