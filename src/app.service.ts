import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bextiyar!';
  }

  getSalam(): string {
    return 'Salam Bextiyar!';
  }
}
