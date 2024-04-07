export const enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
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
  type: string[]
  blocks: ArticleBlock[]
}

export interface ArticleSchema {
  data?: Article
  isLoading: boolean
  error?: string
}
