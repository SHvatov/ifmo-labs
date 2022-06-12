import { Controller, Get, Query, Redirect } from '@nestjs/common';
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

  @Get('/simple?')
  getSimplesPage(@Query() query: JSON): string {
    let n = parseInt(Object.keys(query)[0]);
    let simpleNumbers = this.appService.getSimples(n);
    return `
      <html lang='ru'>
        <head>
          <title>${simpleNumbers}</title>
        </head>
        <body>
          <h4>shvatov</h4>
        </body>
      </html>
    `;
  }
}
