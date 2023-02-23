import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repository/quiz.repository';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizEntity } from './entity/quiz.entity';
import { QuizHasQuestionsEntity } from './entity/quizHasQuestions.entity';
import { QuizHasQuestionsRepository } from './repository/quizHasQuestions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizEntity, QuizHasQuestionsEntity])],
  providers: [QuizService, QuizRepository, QuizHasQuestionsRepository],
  controllers: [QuizController],
  exports: [],
})
export class QuizModule {}
