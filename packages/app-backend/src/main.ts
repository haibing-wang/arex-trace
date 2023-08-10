import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import * as requestIp from 'request-ip';
import {prepareInit} from "../utils/prepareInit";
async function bootstrap() {
  prepareInit();
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  app.use(requestIp.mw());
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
