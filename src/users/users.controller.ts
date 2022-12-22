import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { LoginRequest } from 'src/models/loginRequest';
import { RegisterUserRequest } from 'src/models/registerUserRequest';
import { User } from 'src/models/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  createUser(@Body() request: RegisterUserRequest): number {
    console.log(request);
    return this.usersService.register(request);
  }

  @Get('/current')
  getCurrentUser(): User {
    return {
      email: 'mail@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
      id: 42,
      password: '22',
    };
  }

  @Post('login')
  test(@Body() request: LoginRequest): User {
    return this.usersService.login(request);
  }

  @Get('getUsers')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }
}
