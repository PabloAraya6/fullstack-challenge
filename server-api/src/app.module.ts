import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { uri } from './config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri,
        useNewUrlParser: true,
      }),
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
