import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface UserData {
  username: string;
  password: string;
}

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  constructor(userData: UserData) {
    super();

    if (userData) {
      this.username = userData.username;
      this.password = userData.password;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;
}
