import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { articleSelectors } from 'entities/Article';

import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAppAsyncThunk<Comment, string, { rejectValue: string }>(
  'sendComment',
  async (text, thunkAPI) => {
    const {
      rejectWithValue,
      getState,
      dispatch,
      extra: { api }
    } = thunkAPI;

    const user = getUserAuthData(getState());
    const article = articleSelectors.getArticle(getState());

    if (!user || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await api.post<Comment>('/comments', {
        userId: user.id,
        articleId: article.id,
        text
      });

      if (!response.data) {
        throw new Error();
      }

      void dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
