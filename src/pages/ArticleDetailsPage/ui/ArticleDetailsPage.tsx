import React, { type FC, useCallback, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ArticleDetails,
  articleReducer,
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

import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleCommentsReducer,
  commentsAdapterSelectors
} from '../model/slice/articleCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';
import { articleCommentsSelectors } from '../model/selectors/articleCommentsSelectors';

const reducers = {
  article: articleReducer,
  articleComments: articleCommentsReducer
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

  useEffect(() => {
    void dispatch(fetchArticleById(id));
    void dispatch(fetchCommentsByArticleId(id));
  }, [id]);

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ScrollableContainer isNeedSaveScrollOffset>
        <ArticleDetails />
        <Typography className={styles.commentsTitle}>{t('comments')}</Typography>
        <AddCommentForm onSendComment={onSendComment} className={styles.commentsForm} />
        <CommentsList comments={comments} isLoading={isLoadingComments} />
      </ScrollableContainer>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
