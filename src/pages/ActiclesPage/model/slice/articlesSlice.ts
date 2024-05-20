import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article } from 'entities/Article';
import { type StateSchema } from 'app/providers/StoreProvider';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { articlesSelectors } from '../selectors/articlesSelectors';
import { type ArticlesSchema, type ArticlesView } from '../types/articlesSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id
});

export const getInitialView = () => {
  const initialView = localStorage
    .getItem(LocalStorageKeys.ARTICLES_VIEW) as ArticlesView | null;

  if (initialView) {
    return initialView;
  }

  return 'cell';
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    error: undefined,
    isLoading: false,
    view: getInitialView(),
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload;
    },
    setPaginationPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setInited: (state, action: PayloadAction<boolean>) => {
      state._inited = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;

      if (action.meta.arg.replaceData) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const limit = articlesSelectors.getArticlePageLimit(state);
      state.isLoading = false;
      state.error = undefined;
      state.hasMore = action.payload.length >= limit;

      if (action.meta.arg.replaceData) {
        articlesAdapter.setMany(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const articlesAdapterSelectors = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

export const {
  actions: articlesActions,
  reducer: articlesReducer
} = articlesSlice;
