import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface RoleData {
  roleId: string;
  name: string;
}

@Entity({ name: 'role' })
export class RoleEntity extends BaseEntity {
  constructor(roleData: RoleData) {
    super();

    if (roleData) {
      this.role_id = roleData.roleId;
      this.name = roleData.name;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  role_id: string;

  @Column()
  name: string;
}
