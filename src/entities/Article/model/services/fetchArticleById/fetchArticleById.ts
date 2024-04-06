import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';

import { type Article } from '../../types/ArticleSchema';

export const fetchArticleById = createAppAsyncThunk<Article, string, { rejectValue: string }>(
  'article/fetchArticleById',
  async (id, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Article>(`/articles/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
