import { User } from "../Models/User";

export class UserService{
    users: User[] = [
        new User('User1', 'Male', 'Monthly', 'Active'),
        new User('User2', 'Male', 'Yearly', 'Active'),
        new User('User3', 'Female', '2 Months', 'Inactive')
    ];


    getAllUsers(){
        return this.users;
    }

    createUsers(name:string, gender:string, subType:string, status:string){
            let user = new User(name, gender, subType, status);
            this.users.push(user);
    }
}