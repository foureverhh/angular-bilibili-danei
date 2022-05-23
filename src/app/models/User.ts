
export class User{
    userId:string;
    id:string;
    title:string;
    completed: boolean;
    private age:number;
    constructor(
        userId: string,
        id: string,
        title: string,
        completed: boolean,
        age: number
    ) {
        this.userId = userId;
        this.id=id;
        this.title = title;
        this.completed = completed;
        this.age = age;
    }

    // private 
/*
    getUserId() {
        return this.userId;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getCompleted() {
        return this.completed;
    }

    toObject() {
        return {
            userId : this.userId,
            id: this.id,
            title: this.title,
            completed: this.completed
        }
    }

    serialize() {
        return JSON.stringify(this.toObject);
    }

    static fromJSON(serialized: string) {
        const user: ReturnType<User["toObject"]> = JSON.parse(serialized);
        return new User(
            user.userId,
            user.id,
            user.title,
            user.completed
        )
    }
    */
    
}