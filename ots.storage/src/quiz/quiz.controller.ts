import { Controller, Get, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@Controller('/quiz')
@UseGuards(AuthenticatedGuard)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getQuizzes() {
    return this.quizService.getAllQuizzes();
  }
}
