import { Body, Controller, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly user: UserService){}

    @Post('create')
    create(@Body() user : Prisma.UserCreateInput){
        this.user.createUser(user)
    }
}
