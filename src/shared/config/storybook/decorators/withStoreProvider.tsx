import React from 'react';
import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'shared/types/DeepPartial';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { articleReducer } from 'entities/Article';
import { articlesFiltersReducer } from 'features/ArticlesFilters';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articlesFilters: articlesFiltersReducer,
  articleDetailsPage: articleDetailsPageReducer
};

export const withStoreProvider = (
  initialState?: DeepPartial<StateSchema>,
  initialReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (
  Story
) => (
  <StoreProvider
    initialState={initialState}
    initialReducers={{ ...defaultReducers, ...initialReducers }}
  >
    <Story />
  </StoreProvider>
);
