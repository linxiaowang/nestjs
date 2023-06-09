import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
  Headers,
  HttpCode,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

@Controller({
  path: 'user',
  // version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body('age') body) {
    console.log(body);
    return {
      code: 200,
    };
    // return this.userService.create(createUserDto);
  }

  @Get()
  // @Version('1')
  findAll(@Query() query) {
    console.log(query);

    // return this.userService.findAll();
    return {
      code: 200,
      message: query.name,
    };
  }

  // @Get(':id')
  // // @HttpCode(500)
  // findOne(@Param('id') id: string, @Headers() headers) {
  //   console.log(headers);

  //   return this.userService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('code')
  createCaptcha(@Req() req, @Res() res, @Session() session) {
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });

    session.code = Captcha.text;
    res.type('image/svg+xml');
    res.send(Captcha.data);
  }

  @Post('create')
  createUser(@Body() body, @Session() session) {
    console.log(body, session.code);
    if (session.code.toLocaleLowerCase() === body?.code.toLocaleLowerCase()) {
      return {
        code: 200,
        message: '验证码正确',
      };
    } else {
      return {
        code: 200,
        message: '验证码错误',
      };
    }
  }
}
