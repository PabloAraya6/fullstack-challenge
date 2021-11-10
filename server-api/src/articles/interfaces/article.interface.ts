import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly url: string;
  readonly title: string;
  readonly author: string;
  readonly article_title: string;
  readonly article_url: string;
  readonly created_at: string;
}
