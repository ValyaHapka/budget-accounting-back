import { Controller, Post, Body, Get } from '@nestjs/common';

import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userDto: createUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }
}
