import { Controller, Get, Header, Post, Query, Req, ConsoleLogger } from '@nestjs/common';
import { Request } from 'express';
import { createConnection, Schema } from 'mongoose';
import * as rawbody from 'raw-body';
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

  @Get("/promise/")
  @Header('Content-Type', 'text/plain; charset=UTF-8')
  @Header('Access-Control-Allow-Origin', '*')
  getPromise(): string {
    return `
      function task(x) { 
        if (x < 18) 
          return Promise.resolve('yes');
        else 
          return Promise.reject('no');
      }
    `;
  }

  @Get("/fetch/")
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Conent-Type', 'text/html; charset=UTF-8')
  getFetch(): string {
    return `
    <html>
    <input id="inp">
    <button id="bt" onclick="
          fetch(document.getElementById('inp').value)
            .then((response) => response.text())
            .then(data => document.getElementById('inp').value = data);
        ">Click</button>
    </body>
    
    </html>
    `;
  }

  @Post("/result4/")
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  @Header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  @Header("Access-Control-Allow-Headers", "x-test,Content-Type,Accept,Access-Control-Allow-Headers")
  async getResult4(@Req() request: Request): Promise<JSON> {
    const raw = await rawbody(request);
    const body = raw.toString().trim();
    const json = `
    {
      "message": "itmo335221",
      "x-result": "${request.headers['x-test']}",
      "x-body": "${body}"
    }
    `;
    console.log(json);
    return Promise.resolve(JSON.parse(json));
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
  getSimplePage(@Query() query: JSON): string {
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

  @Post("/insert/")
  @Header('Accept', 'application/x-www-form-urlencoded')
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  @Header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  @Header("Access-Control-Allow-Headers", "Content-Type,Accept,Access-Control-Allow-Headers")
  insertIntoDb(@Req() request: Request): any {
    const logger = new ConsoleLogger();

    logger.error(JSON.stringify(request.params));
    logger.error(JSON.stringify(request.headers));
    logger.error(JSON.stringify(request.body));

    const log = request.body['login'];
    const pass = request.body['password'];
    const URL = request.body['URL'];

    logger.error(`Data: ${log}, ${pass}, ${URL}`);

    const connection = createConnection(URL);
    const schema = new Schema({ login: 'string', password: 'string' });
    const users = connection.model('users', schema);

    const user = new users({ login: `${log}`, password: `${pass}` });
    user.save(function (err) {
        if (err) logger.error("Error: " + err);
      });

    logger.error(JSON.stringify(user));
    return user;
  }
}
