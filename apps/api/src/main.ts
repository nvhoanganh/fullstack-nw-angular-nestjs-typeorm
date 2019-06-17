/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // custom config
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('api')
    .setBasePath('api')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  // end custom config

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
