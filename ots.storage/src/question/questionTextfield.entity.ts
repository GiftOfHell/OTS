import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface QuestionTextfieldData {
  questionId: string;
  typeId: string;
}

@Entity({ name: 'question_textfield' })
export class QuestionTextfieldEntity extends BaseEntity {
  constructor(questionTextfieldData: QuestionTextfieldData) {
    super();

    if (questionTextfieldData) {
      this.question_id = questionTextfieldData.questionId;
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
