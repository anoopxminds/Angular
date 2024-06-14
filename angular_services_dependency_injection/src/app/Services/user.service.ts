import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";
@Injectable()
export class UserService{
    users: User[] = [
        new User('User1', 'Male', 'Monthly', 'Active'),
        new User('User2', 'Male', 'Yearly', 'Active'),
        new User('User3', 'Female', '2 Months', 'Inactive')
    ];

    constructor(private logger: LoggerService){}


    getAllUsers(){
        return this.users;
    }

    createUsers(name:string, gender:string, subType:string, status:string){
            let user = new User(name, gender, subType, status);
            this.users.push(user);
            this.logger.loggerMessage(name, status);
    }

    UserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.UserDetailsClicked.emit(user);
    }
}