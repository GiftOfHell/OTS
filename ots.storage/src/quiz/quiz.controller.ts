import { Controller, Get, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { Roles } from '../auth/role.decorator';
import { Role } from '../constants';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller('/quiz')
@UseGuards(AuthenticatedGuard)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  getQuizzes() {
    return this.quizService.getAllQuizzes();
  }
}
