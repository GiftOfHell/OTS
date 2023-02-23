import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface UserData {
  userId: string;
  username: string;
  password: string;
}

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  constructor(userData: UserData) {
    super();

    if (userData) {
      this.user_id = userData.userId;
      this.username = userData.username;
      this.password = userData.password;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
