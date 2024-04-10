import { Global, Module } from '@nestjs/common';

@Global() // modulo global
@Module({
  imports: [],
  providers: [
    {
      provide: 'API_SECRET',
      useValue: '123456',
    },
  ],
  exports: ['API_SECRET'],
})
export class DatabaseModule {}
