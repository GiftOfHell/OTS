import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuizEntity } from './quiz.entity';
import { QuestionEntity } from '../../question/question.entity';

interface QuizHasQuestionsData {
  quizHasQuestionsId: string;
  quizId: string;
  questionId: string;
}

@Entity({ name: 'quiz_has_questions' })
export class QuizHasQuestionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  quiz_has_questions_id: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.quiz_id)
  @JoinColumn({
    referencedColumnName: 'quiz_id',
    name: 'quiz_id',
  })
  quiz: QuizEntity;

  @ManyToOne(() => QuestionEntity, (question) => question.question_id)
  @JoinColumn({
    referencedColumnName: 'question_id',
    name: 'question_id',
  })
  question: QuestionEntity;
}
