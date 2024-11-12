import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (origin, callback) => {
      console.log('CORS origin:', origin); // Mensaje de depuración para el origen
      if (!origin || origin.includes('localhost')) {
        //console.log('ALLOWED!');
        callback(null, true);
        return;
      }

      const URL_FRONTEND = process.env.FRONTEND_URL.split(',');
      const allowedOrigins = URL_FRONTEND;
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    // allowedHeaders: ['*'],
    //exposedHeaders:['*'],
  });

  await app.listen(3000);
}
bootstrap();
