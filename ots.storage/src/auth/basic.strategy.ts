import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      passReqToCallback: true,
    });
  }

  public validate = async (req, username, password): Promise<boolean> => {
    // call service that checks username and password
    const areLoginAndPasswordCorrect = true;

    if (areLoginAndPasswordCorrect) {
      return true;
    }
    throw new UnauthorizedException();
  };
}
