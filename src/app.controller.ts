import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Redirect('/resources', 302)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/author')
  getAuthor(): string {
    return this.appService.getAuthor();
  }

  @Get('/proto')
  getProtoChain(): String {
    return this.appService.getProtoChain();
  }
}
