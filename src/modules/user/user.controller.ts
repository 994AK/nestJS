import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
  ) {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async loginUser(@Body() userData: { name: string; password: string }) {
    return this.userService.loginUser(userData);
  }

  //查询用户信息
  @Get('findUserById')
  async findUserById(@Query() query: { id: string }) {
    return this.userService.findUserById(query);
  }
}