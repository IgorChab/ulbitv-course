import { type User } from 'entities/User';

export interface Comment {
  id: string
  text: string
  articleId: string
  userId: string
  user: User
}
