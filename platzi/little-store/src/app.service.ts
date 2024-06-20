import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  // de esta manera se inyecta una variable de entorno con useValue
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const nodeEnv = this.configService.env;
    const apikey = this.configService.apiKey;
    const DBname = this.configService.database.name;
    // console.log(this.tasks);
    return 'Hello World! ' + apikey + ' ' + DBname + ' ' + nodeEnv;
  }
}
