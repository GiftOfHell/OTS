import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface QuizData {
  quizId: string;
  difficulty: number;
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
}
