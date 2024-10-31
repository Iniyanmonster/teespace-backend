import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, UserModule, PostModule ],
  controllers: [AppController, UserController, PostController],
  providers: [AppService ,UserService ,PostService ,PrismaService],
})
export class AppModule {}
