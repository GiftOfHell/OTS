import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { LocalAuthGuard } from '../auth/guards/local.auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async addUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(
      createUserDto.username,
      createUserDto.password,
    );
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req) {
    return { ...req.user };
  }

  @Get('/logout')
  logout(@Req() req) {
    req.session.destroy();
    return { message: 'The user session has ended' };
  }
}
