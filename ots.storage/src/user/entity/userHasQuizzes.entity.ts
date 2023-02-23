import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuizEntity } from '../../quiz/entity/quiz.entity';
import { UserEntity } from './user.entity';

interface UserHasQuizzesData {
  userHasQuizzesId: string;
  userId: string;
  quizId: string;
  result: string;
}

@Entity({ name: 'user_has_quizzes' })
export class UserHasQuizzesEntity extends BaseEntity {
  constructor(userHasQuizzesData: UserHasQuizzesData) {
    super();

    if (userHasQuizzesData) {
      this.user_has_quizzes_id = userHasQuizzesData.userHasQuizzesId;
      this.result = userHasQuizzesData.result;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_has_quizzes_id: string;

  @Column()
  result: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { onDelete: 'CASCADE' })
  @JoinColumn({
    referencedColumnName: 'user_id',
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.quiz_id, { onDelete: 'CASCADE' })
  @JoinColumn({
    referencedColumnName: 'quiz_id',
    name: 'quiz_id',
  })
  quiz: QuizEntity;
}
