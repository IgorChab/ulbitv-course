import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { type Article, ArticleType } from 'entities/Article';
import { articlesFiltersSelectors } from 'features/ArticlesFilters';

import { articlesSelectors } from '../selectors/articlesSelectors';

interface FetchArticlesListArgs {
  page: number
  replaceData?: boolean
}

export const fetchArticlesList = createAppAsyncThunk<
  Article[],
  FetchArticlesListArgs,
  { rejectValue: string }
>(
  'articles/fetchArticlesList',
  async ({ page }, thunkAPI) => {
    const {
      rejectWithValue,
      getState,
      extra: { api }
    } = thunkAPI;

    try {
      const limit = articlesSelectors.getArticlePageLimit(getState());
      const sort = articlesFiltersSelectors.getSort(getState());
      const order = articlesFiltersSelectors.getOrder(getState());
      const search = articlesFiltersSelectors.getSearch(getState());
      const type = articlesFiltersSelectors.getType(getState());

      const response = await api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          types_like: type === ArticleType.ALL ? undefined : type
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
