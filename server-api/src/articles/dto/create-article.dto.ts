import { IsString, IsUrl, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsDateString()
  @IsNotEmpty()
  readonly created_at: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsUrl()
  @IsNotEmpty()
  readonly url: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsString()
  @IsNotEmpty()
  readonly article_title: string;

  @IsString()
  @IsNotEmpty()
  readonly article_url: string;
}
