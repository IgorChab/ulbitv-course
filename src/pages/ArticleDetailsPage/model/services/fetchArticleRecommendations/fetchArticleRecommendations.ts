import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Article } from 'entities/Article';

export const fetchArticleRecommendations = createAppAsyncThunk<
  Article[],
  undefined,
  { rejectValue: string }
>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Article[]>('/articles', {
        params: {
          _limit: 8
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  });
