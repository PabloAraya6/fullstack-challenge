import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop({ type: Date })
  created_at: string;

  @Prop()
  title: string;

  @Prop()
  url: string;

  @Prop()
  author: string;

  @Prop()
  article_title: string;

  @Prop()
  article_url: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
