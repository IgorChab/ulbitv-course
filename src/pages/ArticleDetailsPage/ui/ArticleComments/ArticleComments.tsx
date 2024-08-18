import React, { type FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentsList } from 'entities/Comment';
import { Typography } from 'shared/ui/Typography/Typography';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';

import { commentsAdapterSelectors } from '../../model/slice/articleCommentsSlice';
import { articleCommentsSelectors } from '../../model/selectors/articleCommentsSelectors';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleCommentsProps {
  id: string
}

export const ArticleComments: FC<ArticleCommentsProps> = ({ id }) => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const comments = useSelector(commentsAdapterSelectors.selectAll);
  const isLoadingComments = useSelector(articleCommentsSelectors.isLoading);

  useEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  }, [id]);

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text));
  }, []);

  return (
    <VStack gap={16} wFull>
      <Typography>{t('comments')}</Typography>
      <AddCommentForm onSendComment={onSendComment} />
      <CommentsList comments={comments} isLoading={isLoadingComments} />
    </VStack>
  );
};
