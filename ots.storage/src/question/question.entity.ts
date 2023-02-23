import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ThemeEntity } from '../quiz/entity/theme.entity';
import { TypeEntity } from './type.entity';

interface QuestionData {
  questionId: string;
  difficulty: number;
  value: number;
  themeId: string;
  typeId: string;
}

@Entity({ name: 'question' })
export class QuestionEntity extends BaseEntity {
  constructor(questionData: QuestionData) {
    super();

    if (questionData) {
      this.question_id = questionData.questionId;
      this.difficulty = questionData.difficulty;
      this.value = questionData.value;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  question_id: string;

  @Column()
  difficulty: number;

  @Column()
  value: number;

  @ManyToOne(() => ThemeEntity, (theme) => theme.theme_id)
  @JoinColumn({
    referencedColumnName: 'theme_id',
    name: 'theme_id',
  })
  theme: ThemeEntity;

  @ManyToOne(() => TypeEntity, (type) => type.type_id)
  @JoinColumn({
    referencedColumnName: 'type_id',
    name: 'type_id',
  })
  type: TypeEntity;
}
