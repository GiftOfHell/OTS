import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface QuizData {
  testId: string;
  name: string;
  difficulty: number;
}

@Entity({ name: 'quiz' })
export class QuizEntity extends BaseEntity {
  constructor(quizData: QuizData) {
    super();

    this.test_id = quizData.testId;
    this.name = quizData.name;
    this.difficulty = quizData.difficulty;
  }

  @PrimaryGeneratedColumn('uuid')
  test_id: string;

  @Column()
  name: string;

  @Column()
  difficulty: number;
}
