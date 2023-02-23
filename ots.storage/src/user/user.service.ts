import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async createUser(login: string, password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return this.userRepository.createOne({
      username: login,
      password: hashedPassword,
    });
  }

  async getUser(login: string) {
    return this.userRepository.findUserByLogin(login);
  }
}
