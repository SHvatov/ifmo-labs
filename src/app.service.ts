import { Injectable } from '@nestjs/common';
import Any = jasmine.Any;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World1!!1!';
  }

  getAuthor(): string {
    return 'Хватов Сергей';
  }

  private static getTracePrototypeChainOf(object: Any): string {
    let proto = Object.getPrototypeOf(object);
    let result = object.name + ' -> ';

    while (proto) {
      result += proto.name;
      proto = Object.getPrototypeOf(proto);

      if (proto) {
        result += ' -> ';
      }
    }

    return result;
  }

  getProtoChain(): string {
    const { o3 } = require('goss_proto');
    return AppService.getTracePrototypeChainOf(o3);
  }
}
