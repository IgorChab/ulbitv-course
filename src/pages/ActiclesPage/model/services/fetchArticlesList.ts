import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Article } from 'entities/Article';

interface FetchArticlesListArgs {
  page: number
  limit: number
}

export const fetchArticlesList = createAppAsyncThunk<
  Article[],
  FetchArticlesListArgs,
  { rejectValue: string }
>(
  'articles/fetchArticlesList',
  async ({ page, limit }, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
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
