import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly url: string;
  readonly title: string;
  readonly author: string;
  readonly story_title: string;
  readonly story_url: string;
  readonly created_at: string;
}
