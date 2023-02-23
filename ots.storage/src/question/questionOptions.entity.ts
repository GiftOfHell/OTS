import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface QuestionOptionsData {
  questionId: string;
  typeId: string;
}

@Entity({ name: 'question_options' })
export class QuestionOptionsEntity extends BaseEntity {
  constructor(questionOptionsData: QuestionOptionsData) {
    super();

    if (questionOptionsData) {
      this.question_id = questionOptionsData.questionId;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  question_id: string;

  @ManyToOne(() => TypeEntity, (type) => type.type_id)
  @JoinColumn({
    referencedColumnName: 'type_id',
    name: 'type_id',
  })
  type: TypeEntity;
}
