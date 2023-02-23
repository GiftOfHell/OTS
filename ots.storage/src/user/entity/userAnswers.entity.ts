import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserHasQuizzesEntity } from './userHasQuizzes.entity';
import { QuizHasQuestionsEntity } from '../../quiz/entity/quizHasQuestions.entity';

interface UserAnswerData {
  userAnswerId: string;
  quizHasQuestionsId: string;
  userHasQuizzesId: string;
  answer: string;
}

@Entity({ name: 'user_answer' })
export class UserAnswerEntity extends BaseEntity {
  constructor(userAnswerData: UserAnswerData) {
    super();

    if (userAnswerData) {
      this.user_answer_id = userAnswerData.userAnswerId;
      this.answer = userAnswerData.answer;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  user_answer_id: string;

  @ManyToOne(
    () => QuizHasQuestionsEntity,
    (quizHasQuestions) => quizHasQuestions.quiz_has_questions_id,
  )
  @JoinColumn({
    referencedColumnName: 'quiz_has_questions_id',
    name: 'quiz_has_questions_id',
  })
  quiz_has_questions: QuizHasQuestionsEntity;

  @ManyToOne(
    () => UserHasQuizzesEntity,
    (userHasQuizzes) => userHasQuizzes.user_has_quizzes_id,
  )
  @JoinColumn({
    referencedColumnName: 'user_has_quizzes_id',
    name: 'user_has_quizzes_id',
  })
  user_has_quizzes: UserHasQuizzesEntity;

  @Column()
  answer: string;
}
