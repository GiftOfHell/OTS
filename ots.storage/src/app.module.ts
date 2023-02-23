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
      UserEntity,
    ]),
    QuizModule,
    AuthModule,
  ],
})
export class AppModule {}
