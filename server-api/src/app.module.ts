import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { uri, config } from './config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri,
        dbName: config.database_name
      }),
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
