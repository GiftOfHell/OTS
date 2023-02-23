import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';

interface UserHasRolesData {
  userHasRolesId: string;
  userId: string;
  roleId: string;
}

@Entity({ name: 'user_has_roles' })
export class UserHasRolesEntity extends BaseEntity {
  constructor(userHasRolesData: UserHasRolesData) {
    super();

    if (userHasRolesData) {
      this.user_has_roles_id = userHasRolesData.userHasRolesId;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_has_roles_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { onDelete: 'CASCADE' })
  @JoinColumn({
    referencedColumnName: 'user_id',
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.role_id, { onDelete: 'CASCADE' })
  @JoinColumn({
    referencedColumnName: 'role_id',
    name: 'role_id',
  })
  role: RoleEntity;
}
