import React, { type FC, useEffect } from 'react';
import {
  DynamicModuleLoader,
  type ReducersMap
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails, articleReducer, fetchArticleById } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ScrollableContainer } from 'widgets/ScrollableContainer';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { VStack } from 'shared/ui/Stack';

import { ArticleComments } from '../ArticleComments/ArticleComments';
import { articleDetailsPageReducer } from '../../model/slice/articleDetailsPageReducer';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersMap = {
  article: articleReducer,
  articleDetailsPage: articleDetailsPageReducer
};

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchArticleById(id));
  }, [id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ScrollableContainer isNeedSaveScrollOffset className={className}>
        <VStack gap={16}>
          <ArticleDetailsPageHeader />
          <ArticleDetails />
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </ScrollableContainer>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
