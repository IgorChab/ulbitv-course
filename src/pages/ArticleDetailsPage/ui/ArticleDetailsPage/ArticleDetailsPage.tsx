import React, { type FC, useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader,
  type ReducersMap
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ArticleDetails,
  articleReducer,
  ArticlesList,
  fetchArticleById
} from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Typography } from 'shared/ui/Typography/Typography';
import { CommentsList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { ScrollableContainer } from 'widgets/ScrollableContainer';

import { recommendationsSelectors } from '../../model/slice/articleRecommendationsSlice';
import {
  articleRecommendationsSelectors
} from '../../model/selectors/articleRecommendationsSelectors';
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  commentsAdapterSelectors
} from '../../model/slice/articleCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';
import { articleCommentsSelectors } from '../../model/selectors/articleCommentsSelectors';
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
  const { t } = useTranslation('articleDetails');
  const comments = useSelector(commentsAdapterSelectors.selectAll);
  const isLoadingComments = useSelector(articleCommentsSelectors.isLoading);
  const recommendedArticles = useSelector(recommendationsSelectors.selectAll);
  const isLoadingRecommendations = useSelector(articleRecommendationsSelectors.isLoading);

  useEffect(() => {
    void dispatch(fetchArticleById(id));
    void dispatch(fetchCommentsByArticleId(id));
    void dispatch(fetchArticleRecommendations());
  }, [id]);

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ScrollableContainer isNeedSaveScrollOffset className={className}>
        <ArticleDetailsPageHeader />
        <ArticleDetails />
        <Typography className={styles.sectionTitle}>{t('weRecommend')}</Typography>
        <ArticlesList
          articles={recommendedArticles}
          isLoading={isLoadingRecommendations}
          view="cell"
          skeletonCount={8}
          target="_blank"
          className={styles.recommendations}
        />
        <Typography className={styles.sectionTitle}>{t('comments')}</Typography>
        <AddCommentForm onSendComment={onSendComment} className={styles.commentsForm} />
        <CommentsList comments={comments} isLoading={isLoadingComments} />
      </ScrollableContainer>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
