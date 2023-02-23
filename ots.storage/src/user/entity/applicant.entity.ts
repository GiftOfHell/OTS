import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

interface ApplicantData {
  userId: string;
  firstName: string;
  secondName: string;
  lastName: string;
  school: string;
  city: string;
  class: string;
  phoneNumber: string;
  email: string;
}

@Entity({ name: 'applicant' })
export class ApplicantEntity extends BaseEntity {
  constructor(applicantData: ApplicantData) {
    super();

    if (applicantData) {
      this.user_id = applicantData.userId;
      this.first_name = applicantData.firstName;
      this.second_name = applicantData.secondName;
      this.last_name = applicantData.lastName;
      this.school = applicantData.school;
      this.city = applicantData.city;
      this.class = applicantData.class;
      this.phone_number = applicantData.phoneNumber;
      this.email = applicantData.email;
    }
  }

  @OneToOne(() => UserEntity, (user: UserEntity) => user.user_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  @PrimaryColumn()
  user_id: string;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  last_name: string;

  @Column()
  school: string;

  @Column()
  city: string;

  @Column()
  class: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;
}
