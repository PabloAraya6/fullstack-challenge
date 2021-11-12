import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './schemas/article.schema';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class ArticlesSeedService {
  private readonly logger = new Logger(ArticlesSeedService.name);
  constructor(
    private http: HttpService,
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}
  async onModuleInit() {
    await this.handleCron();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    let articles: [];
    try {
      await this.articleModel.deleteMany({});
      const data = await this.http
        .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
        .pipe(map((res) => res.data));

      const result = await lastValueFrom(data);
      articles = result.hits;
      if (!articles) {
        throw Error('cannot get data from: hn.algolia.com');
      }

      articles.forEach(async (art: Article) => {
        await this.articleModel.create({
          created_at: art.created_at,
          title: art.title,
          url: art.url,
          author: art.author,
          story_title: art.story_title,
          story_url: art.story_url,
        });
      });
    } catch (e) {
      this.logger.error(e.message);
    }
  }
}
