import { type Comment } from 'entities/Comment';

export const commentMock: Comment = {
  id: '1',
  text: 'some comment',
  userId: '1',
  articleId: '1',
  user: {
    id: '1',
    username: 'admin',
    password: '123',
    avatar: 'https://kartinki.pics/uploads/posts/2022-12/1670303214_18-kartinkin-net-p-adidas-kartinki-vkontakte-18.jpg'
  }
};
