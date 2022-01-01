class User {
    id: string
    username: string
    email: string
    avatar: string
    rooms: Array<string>
    friends: Array<string>
    uid: string

    constructor(id: string, email: string, username: string){
        this.id= '',
        this.username= username,
        this.email= email,
        this.avatar= `https://avatars.dicebear.com/api/adventurer-neutral/${id}.svg`,
        this.rooms= [],
        this.friends= [],
        this.uid= id
    }
}

export default User