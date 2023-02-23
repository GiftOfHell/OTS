import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuizEntity } from '../quiz/entity/quiz.entity';
import * as path from 'path';

export default class TypeormConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      username: configService.get('db.username'),
      password: configService.get('db.password'),
      database: configService.get('db.database'),
      host: configService.get('db.host'),
      port: configService.get('db.port'),
      type: 'postgres',
      ssl: false,
      synchronize: configService.get('db.sync'),
      autoLoadEntities: true,
    };
  }
}

export const typeOrmConfigAsync = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeormConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
