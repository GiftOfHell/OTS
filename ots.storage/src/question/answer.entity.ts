import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';

interface AnswerData {
  answerId: string;
  typeId: string;
  answer: string;
}

@Entity({ name: 'answer' })
export class AnswerEntity extends BaseEntity {
  constructor(answerData: AnswerData) {
    super();

    if (answerData) {
      this.answer_id = answerData.answerId;
      this.answer = answerData.answer;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  answer_id: string;

  @ManyToOne(() => TypeEntity, (type) => type.type_id)
  @JoinColumn({
    referencedColumnName: 'type_id',
    name: 'type_id',
  })
  type: TypeEntity;

  @Column()
  answer: string;
}
