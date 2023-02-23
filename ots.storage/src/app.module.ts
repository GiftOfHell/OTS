import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import configuration from './config/index';
import { ConfigModule } from '@nestjs/config';
import { QuestionEntity } from './question/question.entity';
import { RoleEntity } from './user/entity/role.entity';
import { UserHasQuizzesEntity } from './user/entity/userHasQuizzes.entity';
import { UserHasRolesEntity } from './user/entity/userHasRoles.entity';
import { UserEntity } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ApplicantEntity } from './user/entity/applicant.entity';
import { UserAnswerEntity } from './user/entity/userAnswers.entity';
import { ThemeEntity } from './quiz/entity/theme.entity';
import { QuizHasQuestionsEntity } from './quiz/entity/quizHasQuestions.entity';
import { QuizEntity } from './quiz/entity/quiz.entity';
import { TypeEntity } from './question/type.entity';
import { AnswerEntity } from './question/answer.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([
      QuestionEntity,
      RoleEntity,
      UserHasQuizzesEntity,
      UserHasRolesEntity,
      ApplicantEntity,
      UserAnswerEntity,
      QuizHasQuestionsEntity,
      QuizEntity,
      TypeEntity,
      AnswerEntity,
      ThemeEntity,
    ]),
    QuizModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
