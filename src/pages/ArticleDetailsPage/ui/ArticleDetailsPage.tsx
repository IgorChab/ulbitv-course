import React, { type FC, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails, articleReducer, fetchArticleById } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

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
    <DynamicModuleLoader reducers={{ article: articleReducer }} removeAfterUnmount>
      <ArticleDetails />
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
