import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserData, UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async createOne(userData: UserData) {
    const user = new UserEntity(userData);
    await user.save();

    return user;
  }

  async findUserByUsername(username: string) {
    return this.findOne({
      where: {
        username,
      },
    });
  }
}
