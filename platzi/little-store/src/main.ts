import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation pipe config on request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignorar datos que no esten en los DTO
      forbidNonWhitelisted: false, // Lanzar error si existen datos prohibidos
      disableErrorMessages: true, // Desabilitar mensajes de error (producción)
    }),
  );

  // Swagger documentation config
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Store API usage')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // CORS: proteccion para que no se pueda acceder a la API desde cualquier lugar
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
