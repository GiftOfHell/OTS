import { Injectable } from '@nestjs/common';
import { QuizRepository } from './repository/quiz.repository';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository) {}

  async getAllQuizzes() {
    return this.quizRepository.getAll();
  }
}
