import React, { type FC, type ReactNode, type UIEvent, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useLocation } from 'react-router-dom';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getScrollPosition, uiActions } from 'features/UI';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';

import styles from './ScrollableContainer.module.scss';

interface ScrollableContainerProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
  isNeedSaveScrollOffset?: boolean
}

export const ScrollableContainer: FC<ScrollableContainerProps> = React.memo(({
  className,
  children,
  onScrollEnd,
  isNeedSaveScrollOffset
}) => {
  const isNeedInfiniteScroll = !!onScrollEnd;
  const location = useLocation();
  const dispatch = useAppDispatch();
  const currentPosition = useAppSelector(state => getScrollPosition(state, location.pathname));
  const scrollPosition = useRef<number>(currentPosition);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const {
    targetNodeCallback,
    scrollAreaCallback
  } = useInfiniteScroll(onScrollEnd);

  /**
   * разобраться как установить scrollTop, если scrollContainer не имеет переполнения
   * например children еще не подгрузился как на стронице ArticleDetailsPage
   */
  useEffect(() => {
    if (scrollContainerRef.current && isNeedSaveScrollOffset) {
      scrollContainerRef.current.scrollTop = scrollPosition.current;
    }
  }, [isNeedSaveScrollOffset]);

  useEffect(() => {
    return () => {
      if (isNeedSaveScrollOffset) {
        dispatch(uiActions.saveScrollPosition({
          pathname: location.pathname,
          position: scrollPosition.current
        }));
      }
    };
  }, [location, isNeedSaveScrollOffset]);

  const saveScrollPosition = useDebounce((position: number) => {
    scrollPosition.current = position;
  });

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    saveScrollPosition(e.currentTarget.scrollTop);
  };

  const setRefs = (node: HTMLDivElement | null) => {
    isNeedInfiniteScroll && scrollAreaCallback(node);
    scrollContainerRef.current = node;
  };

  return (
    <div
      className={classNames(styles.scrollableContainer, {}, [className])}
      ref={setRefs}
      onScroll={isNeedSaveScrollOffset ? onScroll : undefined}
    >
      {children}
      <OptionalRender condition={!!isNeedSaveScrollOffset}>
        <div ref={targetNodeCallback} />
      </OptionalRender>
    </div>
  );
});
