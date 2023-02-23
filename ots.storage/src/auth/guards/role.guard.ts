import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import _ = require('lodash');
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RoleGuard implements CanActivate {
  private readonly logger = new Logger('RoleGuard');
  private superUsers: string[];

  constructor(
    private readonly reflector: Reflector,
    private configService: ConfigService,
  ) {
    this.superUsers = this.configService.get('app.superUsers');
  }

  public canActivate(context: ExecutionContext) {
    const [req] = context.getArgs();

    return true;

    const { user } = req;

    if (this.superUsers.includes(user.email)) {
      return true;
    }

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return false;
    }

    const rolesIntersection = _.intersection(roles, user.roles);

    return rolesIntersection.length > 0;
  }
}
