/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const port = process.env.PORT || 3333;
  console.log(`Realebot api starting. Database hostname is ${environment.db.host}`);
  console.log(`environment variable`, process.env);
  console.log(`Listening now on port ${port}`);

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // custom config
  app.enableCors();

  // middleware
  app.use(logger);

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


  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();

// middleware
export function logger(req, res, next) {
  const reqToken = 'token';
  const startTime = new Date();
  const logreq = {
    '@timestamp': startTime.toISOString(),
    '@Id': reqToken,
    query: req.query,
    params: req.params,
    url: req.url,
    fullUrl: req.originalUrl,
    method: req.method,
    headers: req.headers,
    _parsedUrl: req._parsedUrl
  };

  // console.log(`Request:`, logreq);


  const cleanup = () => {
    res.removeListener('finish', logFn);
    res.removeListener('close', abortFn);
    res.removeListener('error', errorFn);
  };

  const logFn = () => {
    const endTime = new Date();
    cleanup();
    const logres = {
      '@timestamp': endTime.toISOString(),
      '@Id': reqToken,
      queryTime: endTime.valueOf() - startTime.valueOf()
    };
    // console.log('Response:', logres);
  };

  const abortFn = () => {
    cleanup();
    console.warn('Request aborted by the client');
  };

  const errorFn = err => {
    cleanup();
    console.error(`Request pipeline error: ${err}`);
  };

  res.on('finish', logFn); // successful pipeline (regardless of its response)
  res.on('close', abortFn); // aborted pipeline
  res.on('error', errorFn); // pipeline internal error

  next();
}
