import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface QuestionData {
  questionId: string;
  difficulty: number;
}

@Entity({ name: 'question' })
export class QuestionEntity extends BaseEntity {
  constructor(questionData: QuestionData) {
    super();

    if (questionData) {
      this.question_id = questionData.questionId;
      this.difficulty = questionData.difficulty;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  question_id: string;

  @Column()
  difficulty: number;
}
