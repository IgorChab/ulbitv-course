import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';

import styles from './ArticleDetailsPageHeader.module.scss';
import { canEditArticleSelector } from '../../model/selectors/canEditArticle';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams<{ id: string }>();
  const isEditAvailable = useSelector(canEditArticleSelector);

  if (!id) {
    return null;
  }

  return (
    <div className={classNames(styles.articleDetailsPageHeader, {}, [className])}>
      <OptionalRender condition={isEditAvailable}>
        <AppLink to={`${AppPaths.articles}/${id}/edit`} className={styles.editLink}>
          {t('editArticle')}
        </AppLink>
      </OptionalRender>
    </div>
  );
};
