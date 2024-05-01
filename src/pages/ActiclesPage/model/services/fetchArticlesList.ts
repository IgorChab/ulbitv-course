import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Article } from 'entities/Article';

export const fetchArticlesList = createAppAsyncThunk<Article[], undefined, { rejectValue: string }>(
  'articles/fetchArticlesList',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
