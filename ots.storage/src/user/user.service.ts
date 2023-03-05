import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repository/user.repository';
import { UserHasRolesRepository } from './repository/userHasRoles.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userHasRolesRepository: UserHasRolesRepository,
  ) {}

  async createUser(login: string, password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return this.userRepository.createOne({
      username: login,
      password: hashedPassword,
    });
  }

  async getUser(username: string) {
    return this.userRepository.findUserByUsername(username);
  }

  async getFullUser(username: string) {
    const user = await this.userRepository.findUserByUsername(username);
    const roles = await this.userHasRolesRepository.findUserRoles(user.user_id);
    console.log(roles);

    return {
      ...user,
      roles,
    };
  }
}
