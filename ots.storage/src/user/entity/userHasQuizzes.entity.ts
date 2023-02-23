import {
  BaseEntity,
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
}

@Entity({ name: 'user_has_quizzes' })
export class UserHasQuizzesEntity extends BaseEntity {
  constructor(userHasQuizzesData: UserHasQuizzesData) {
    super();

    if (userHasQuizzesData) {
      this.user_has_quizzes_id = userHasQuizzesData.userHasQuizzesId;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_has_quizzes_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    referencedColumnName: 'user_id',
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.quiz_id)
  @JoinColumn({
    referencedColumnName: 'quiz_id',
    name: 'quiz_id',
  })
  quiz: QuizEntity;
}
