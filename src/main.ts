import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); //For Halmet middleware
  app.enableCors(); //For Cors middleware
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); //For input validation
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Example Docs.')
    .setDescription('The example API description.')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, config, { ignoreGlobalPrefix: true });
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
