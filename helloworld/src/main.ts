import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter)
  // app.use(csurf());

  app.setGlobalPrefix('/api/v1');
  SwaggerModule.setup('api', app, createDocument(app))

  await app.listen(3000);
}
bootstrap();
