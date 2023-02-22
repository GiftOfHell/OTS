import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizEntity } from './quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizEntity])],
  providers: [QuizService, QuizRepository],
  controllers: [QuizController],
  exports: [],
})
export class QuizModule {}
