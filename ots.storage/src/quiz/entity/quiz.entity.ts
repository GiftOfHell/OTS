import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ThemeEntity } from './theme.entity';

interface QuizData {
  quizId: string;
  difficulty: number;
  themeId: string;
}

@Entity({ name: 'quiz' })
export class QuizEntity extends BaseEntity {
  constructor(quizData: QuizData) {
    super();

    if (quizData) {
      this.quiz_id = quizData.quizId;
      this.difficulty = quizData.difficulty;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  quiz_id: string;

  @Column()
  difficulty: number;

  // @ManyToOne(() => ThemeEntity, (theme) => theme.theme_id)
  // @JoinColumn({
  //   referencedColumnName: 'theme_id',
  //   name: 'theme_id',
  // })
  // theme: ThemeEntity;
}
