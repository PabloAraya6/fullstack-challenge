import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { ArticleSchema, Article } from './schemas/article.schema';
import { ArticlesSeedService } from './articles-seed.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    HttpModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesSeedService],
})
export class ArticlesModule {}
