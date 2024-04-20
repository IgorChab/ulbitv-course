import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAppAsyncThunk<
  Comment[], string, { rejectValue: string }
>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;
    try {
      const response = await api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
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
