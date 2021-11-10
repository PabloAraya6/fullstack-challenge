import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  NotFoundException,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto, UpdateArticleDto } from './dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  public async getAllArticle(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const articles = await this.articlesService.findAll(paginationQuery);
    return res.status(HttpStatus.OK).json(articles);
  }

  @Get('/:id')
  public async getArticle(@Res() res, @Param('id') articleId: string) {
    if (!articleId) {
      throw new NotFoundException('Article ID does not exist');
    }

    const article = await this.articlesService.findOne(articleId);

    return res.status(HttpStatus.OK).json(article);
  }

  @Post()
  public async addArticle(
    @Res() res,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    try {
      const article = await this.articlesService.create(createArticleDto);
      return res.status(HttpStatus.OK).json({
        message: 'Article has been created successfully',
        article,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Article not created!',
        status: 400,
      });
    }
  }

  @Put('/:id')
  public async updateArticle(
    @Res() res,
    @Param('id') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    try {
      const article = await this.articlesService.update(
        articleId,
        updateArticleDto,
      );
      if (!article) {
        throw new NotFoundException('Article does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Article has been successfully updated',
        article,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Article not updated!',
        status: 400,
      });
    }
  }

  @Delete('/:id')
  public async deleteArticle(@Res() res, @Param('id') articleId: string) {
    if (!articleId) {
      throw new NotFoundException('Article ID does not exist');
    }

    const article = await this.articlesService.remove(articleId);

    return res.status(HttpStatus.OK).json({
      message: 'Article has been deleted',
      article,
    });
  }
}
