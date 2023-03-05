import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserHasRolesEntity } from '../entity/userHasRoles.entity';

@Injectable()
export class UserHasRolesRepository extends Repository<UserHasRolesEntity> {
  constructor(private dataSource: DataSource) {
    super(UserHasRolesEntity, dataSource.createEntityManager());
  }

  async findUserRoles(userId: string) {
    const roles = await this.find({
      where: {
        user: {
          user_id: userId,
        },
      },
      relations: ['role'],
    });

    return roles.map((item) => item.role.name);
  }
}
