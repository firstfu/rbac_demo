import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const rs = {
      name: 'test',
      xx: {
        xx: 'xx',
      },
    };

    return rs;
  }
}
