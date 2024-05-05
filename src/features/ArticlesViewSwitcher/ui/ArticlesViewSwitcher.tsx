import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CellIcon from 'shared/assets/icons/icon_cell.svg';
import ListIcon from 'shared/assets/icons/icon_list.svg';
import { Button } from 'shared/ui/Button/Button';
import { type ArticlesView } from 'pages/ActiclesPage';

import styles from './ArticlesViewSwitcher.module.scss';

interface ArticlesViewSwitcherProps {
  className?: string
  onSelectView: (view: ArticlesView) => void
  view: ArticlesView
}

const viewTypes = [
  {
    view: 'cell',
    Icon: <CellIcon />
  },
  {
    view: 'list',
    Icon: <ListIcon />
  }
] as const;

export const ArticlesViewSwitcher: FC<ArticlesViewSwitcherProps> = ({
  className,
  onSelectView,
  view
}) => {
  const onClick = (selectedView: ArticlesView) => {
    if (selectedView !== view) {
      onSelectView(selectedView);
    }
  };

  return (
    <div className={classNames(styles.articlesViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          className={classNames(styles.button, { [styles.selected]: viewType.view === view })}
          onClick={() => { onClick(viewType.view); }}
          key={viewType.view}
        >
          {viewType.Icon}
        </Button>
      ))}
    </div>
  );
};
