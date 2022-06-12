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

  getSimples(n: number): number {
    const array = [], limit = Math.round(Math.sqrt(n)), result = [];

    // Создаю массив от 2 до (n - 1)
    for (let i = 0  ; i <= n; i++) {
      array.push(true);
    }

    // Удаляю кратные 2, 3, 5...
    for (let i = 2; i <= limit; i++) {
      if (array[i]) {
        for (let j = i * i; j <= n; j += i) {
          array[j] = false;
        }
      }
    }

    // Все значения массива [i] true являются простыми числами
    for (let i = 2; i <= n; i++) {
      if (array[i]) {
        result.push(i);
      }
    }

    return result.length;
  }
}
