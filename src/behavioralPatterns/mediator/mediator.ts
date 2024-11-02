//Centralize and coordinate the interactions between objects to avoid tightly coupled dependencies between objects.

//Mediator interface
interface ChatRoomMediator {
    roomid: Symbol;
    users: User[];
    addUser(user: User): void;
    removeUser(user: User): void;
    broadcastMessage(message: string): void;
    privateMessage(user: User, message: string): void;
}

//Concrete Mediator
class ChatRoom implements ChatRoomMediator {
    roomid: Symbol;
    users: User[] = [];

    constructor() {
        this.roomid = Symbol()
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    removeUser(user: User): void {
        this.users = this.users.filter(u => u !== user);
    }

    broadcastMessage(message: string): void {
        this.users.forEach(u => {
            u.receiveMessage(message);
        });
    }

    privateMessage(user: User, message: string): void {

    }
}

//User class
class User {

    private userID: string;
    private email: string;
    private name: string;
    private chatRoom: ChatRoomMediator;

    constructor(userID: string, name: string, email: string, chatRoom: ChatRoomMediator) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.chatRoom = chatRoom;
    }

    sendMessage(message: string): void {
        this.chatRoom.broadcastMessage(message);
    }

    privateMessage(user: User, message: string): void {
        this.chatRoom.privateMessage(user, message);        
    }

    receiveMessage(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

//Client

const chatRoom = new ChatRoom();
const user = new User('1', 'John', 'jdoe@gmail.com', chatRoom);
const user2 = new User('2', 'Jane', 'jadoe@gmail.com', chatRoom);

chatRoom.addUser(user);
chatRoom.addUser(user2);

user.sendMessage('Hello everyone!');
user2.sendMessage('Hello John!');
