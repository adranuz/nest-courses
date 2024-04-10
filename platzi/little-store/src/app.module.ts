import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { DatabaseModule } from './database/database.module';
import { environment } from './environments';

const API_KEY = '123';
const API_KEY_PROD = 'prod123Key';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService, // provider useClass
    {
      // provider useValue
      // useValue se podria usar tambien para env vars
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
    {
      // provider useFactory
      // esta seria la declaracion de provider, que es como un store de data o una funcion
      // funciona de la version 8 en adelante
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        return await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
