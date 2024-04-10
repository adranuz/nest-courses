import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  // de esta manera se inyecta una variable de entorno con useValue
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,
  ) {}

  getHello(): string {
    const apikeyenv = this.config.get('API_KEY');
    console.log(apikeyenv);
    console.log(this.tasks);
    return 'Hello World! ' + apikeyenv;
  }
}
