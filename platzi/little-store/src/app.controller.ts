import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // inyección de dependencias con useValue
  // llamando a localhost:3000/ se obtiene el mensaje 'Hello World! 123'
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
