const enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title: string
  paragraphs: string[]
}

interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

type ArticleBlocks = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: string[]
  blocks: ArticleBlocks
}

export interface ArticleSchema {
  data?: Article
  isLoading: boolean
  error?: string
}
