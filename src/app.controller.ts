import { Controller, Get, Query, Redirect, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  // @Redirect('/resources', 302)
  @Header('X-Author', 'itmo335221')
  @Header('Access-Control-Allow-Origin', '*')
  getAuthorId(): string {
    return this.appService.getAuthorId();
  }

  @Get("/login/")
  @Header('Content-Type', 'text/plain; charset=UTF-8')
  @Header('Access-Control-Allow-Origin', '*')
  getLogin(): string {
    return this.appService.getAuthorId();
  }

  @Get("/sample/")
  @Header('Content-Type', 'text/plain; charset=UTF-8')
  @Header('Access-Control-Allow-Origin', '*')
  getSample(): string {
    return `
      function task(x) {
        return x * (this * this)
      }
    `;
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
