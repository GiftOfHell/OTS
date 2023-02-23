import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { QuizHasQuestionsEntity } from '../entity/quizHasQuestions.entity';

@Injectable()
export class QuizHasQuestionsRepository extends Repository<QuizHasQuestionsEntity> {
  constructor(private dataSource: DataSource) {
    super(QuizHasQuestionsEntity, dataSource.createEntityManager());
  }

  async getAll() {
    return this.find({
      relations: ['question', 'quiz'],
    });
  }
}
