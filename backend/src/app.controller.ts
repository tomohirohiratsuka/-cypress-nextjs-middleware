import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

const DUMMY_TOKEN='token'
@Controller('api')
export class AppController {
  private logger = new Logger();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth/me')
  me(): { status: boolean } {
    return { status: true };
  }

  @Get('health-check')
  healthCheck(): string {
    return 'Ready';
  }

  @Get('set-cookie')
  setCookie(@Req() req, @Res() res) {
    res
      .status(200)
      .cookie('access_token', DUMMY_TOKEN, {
        domain: 'localhost',
        httpOnly: true,
        secure: false,
      })
      .send();
  }

  @Get('is-authorized')
  isAuthorized(@Req() req) {
    console.log(req.cookies.access_token)
    return { authorized: req.cookies.access_token === DUMMY_TOKEN };
  }
}
