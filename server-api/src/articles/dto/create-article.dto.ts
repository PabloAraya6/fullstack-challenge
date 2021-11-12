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
  readonly story_title: string;

  @IsString()
  @IsNotEmpty()
  readonly story_url: string;
}
