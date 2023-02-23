import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { QuizEntity } from '../entity/quiz.entity';

@Injectable()
export class QuizRepository extends Repository<QuizEntity> {
  constructor(private dataSource: DataSource) {
    super(QuizEntity, dataSource.createEntityManager());
  }

  async getAll() {
    return this.find();
  }
}
