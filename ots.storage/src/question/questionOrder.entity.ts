import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface QuestionOrderData {
  questionId: string;
  typeId: string;
}

@Entity({ name: 'question_order' })
export class QuestionOrderEntity extends BaseEntity {
  constructor(questionOrderData: QuestionOrderData) {
    super();

    if (questionOrderData) {
      this.question_id = questionOrderData.questionId;
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
