import { Injectable } from '@nestjs/common';
import { LoginRequest } from 'src/models/loginRequest';
import { RegisterUserRequest } from 'src/models/registerUserRequest';
import { User } from 'src/models/user';

const users: User[] = [
  {
    id: 42,
    email: 'John@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '12345678',
  },
  {
    id: 43,
    email: 'Elnare@mail.com',
    firstName: 'Elnare',
    lastName: 'Vahabova',
    password: '12345678',
  },
  {
    id: 44,
    email: 'Davqin@mail.com',
    firstName: 'Davqin',
    lastName: 'Abdulla',
    password: '12345678',
  },
  {
    id: 45,
    email: 'Bexi@mail.com',
    firstName: 'Sirin',
    lastName: 'Bexi',
    password: '12345678',
  },
];

@Injectable()
export class UsersService {
  register(userInfo: RegisterUserRequest): number {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const user: User = { id: newId, ...userInfo };
    users.push(user);
    return newId;
  }

  login(request: LoginRequest): User | undefined {
    return users.find(
      (u) => u.password === request.password && u.email === request.email,
    );
  }
}
