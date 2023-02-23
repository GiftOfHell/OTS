import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface QuestionConnectionsData {
  questionId: string;
  typeId: string;
}

@Entity({ name: 'question_connections' })
export class QuestionConnectionsEntity extends BaseEntity {
  constructor(questionConnectionsData: QuestionConnectionsData) {
    super();

    if (questionConnectionsData) {
      this.question_id = questionConnectionsData.questionId;
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
