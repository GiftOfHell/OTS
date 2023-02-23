import { Injectable } from '@nestjs/common';
import { QuizRepository } from './repository/quiz.repository';
import { QuizHasQuestionsRepository } from './repository/quizHasQuestions.repository';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly quizHasQuestionsRepository: QuizHasQuestionsRepository,
  ) {}

  async getAllQuizzes() {
    return this.quizHasQuestionsRepository.getAll();
  }
}
