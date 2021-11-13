import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IArticle } from './interfaces/article.interface';
import { CreateArticleDto, UpdateArticleDto } from './dto';
import { Article } from './schemas/article.schema';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {}

  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Article[]> {
    const { limit, offset } = paginationQuery;

    return await this.articleModel
      .find()
      .skip(offset)
      .limit(limit)
      .sort({ created_at: -1 })
      .exec();
  }

  public async findOne(articleId: string): Promise<Article> {
    const article = await this.articleModel.findById({ _id: articleId }).exec();

    if (!article) {
      throw new NotFoundException(`Article #${articleId} not found`);
    }

    return article;
  }

  public async create(createArticleDto: CreateArticleDto): Promise<IArticle> {
    const newArticle = await this.articleModel.create(createArticleDto);
    return newArticle;
  }

  public async update(
    articleId: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<IArticle> {
    const existingArticle = await this.articleModel.findByIdAndUpdate(
      { _id: articleId },
      updateArticleDto,
    );

    if (!existingArticle) {
      throw new NotFoundException(`Article #${articleId} not found`);
    }

    return existingArticle;
  }

  public async remove(articleId: string): Promise<any> {
    const deletedArticle = await this.articleModel.findByIdAndRemove(articleId);
    return deletedArticle;
  }

  public async removeAll(): Promise<any> {
    try {
      await this.articleModel.deleteMany({});
      return 'All articles has been deleted';
    } catch (error) {
      return 'error: ' + error;
    }
  }
}
