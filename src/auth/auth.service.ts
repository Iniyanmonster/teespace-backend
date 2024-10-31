import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
    private readonly user:User
    
    create(user:User){
        return user //update data in db
    }
    get(user:User){
        const hello = user.name  //user in db authenticate the user
    }
}