import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';

import {
  type ArticlesFiltersSchema,
  type Order,
  type SortFields
} from '../types/ArticlesFiltersSchema';

const getInitialsFiltersFromSearchParams = (): ArticlesFiltersSchema => {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    search: searchParams.get('search') || '',
    order: searchParams.get('order') as Order || 'asc',
    sort: searchParams.get('sort') as SortFields || 'createdAt',
    type: searchParams.get('type') as ArticleType || ArticleType.ALL
  };
};

const initialState: ArticlesFiltersSchema = getInitialsFiltersFromSearchParams();

const articlesFiltersSlice = createSlice({
  name: 'articlesFilters',
  initialState,
  reducers: {
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
    setOrder: (state, actions: PayloadAction<Order>) => {
      state.order = actions.payload;
    },
    setSort: (state, actions: PayloadAction<SortFields>) => {
      state.sort = actions.payload;
    },
    setType: (state, actions: PayloadAction<ArticleType>) => {
      state.type = actions.payload;
    }
  }
});

export const {
  actions: articlesFiltersActions,
  reducer: articlesFiltersReducer
} = articlesFiltersSlice;
