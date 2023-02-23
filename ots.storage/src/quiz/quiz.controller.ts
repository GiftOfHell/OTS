import { Controller, Get, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import process from 'process';
import { BasicGuard } from '../auth/guards/basic.guard';

@Controller('/quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  @UseGuards(BasicGuard)
  getQuizzes() {
    return this.quizService.getAllQuizzes();
  }
}
