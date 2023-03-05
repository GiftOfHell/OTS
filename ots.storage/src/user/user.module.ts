import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { UserHasRolesRepository } from './repository/userHasRoles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserRepository, UserHasRolesRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
