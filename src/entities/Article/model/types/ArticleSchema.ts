import { type User } from 'entities/User';

export const enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}

export const enum ArticleType {
  ALL = 'all',
  IT = 'IT',
  ECONOMICS = 'Economics',
  SCIENCE = 'Science',
  POLITICS = 'Politics',
  JS = 'JS',
  PYTHON = 'Python'
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface IArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title: string
  paragraphs: string[]
}

export interface IArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface IArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export type ArticleBlock = IArticleTextBlock | IArticleImageBlock | IArticleCodeBlock;

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  types: ArticleType[]
  blocks: ArticleBlock[]
  user: User
}

export interface ArticleSchema {
  data?: Article
  isLoading: boolean
  error?: string
}
