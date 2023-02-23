import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface QuestionScaleData {
  questionId: string;
  typeId: string;
}

@Entity({ name: 'question_scale' })
export class QuestionScaleEntity extends BaseEntity {
  constructor(questionScaleData: QuestionScaleData) {
    super();

    if (questionScaleData) {
      this.question_id = questionScaleData.questionId;
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
