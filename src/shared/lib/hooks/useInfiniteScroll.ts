import { useCallback, useRef } from 'react';

type RootNode = IntersectionObserverInit['root'];
type TargetNode = Element | null;

export const useInfiniteScroll = (callback?: () => void) => {
  const scrollAreaRef = useRef<RootNode>(null);
  const targetRef = useRef<TargetNode>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback(() => {
    if (!targetRef.current || !scrollAreaRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback && callback();
      }
    }, {
      root: scrollAreaRef.current || document.querySelector('.pageWrapper'),
      rootMargin: '0px',
      threshold: 1.0
    });

    observer.observe(targetRef.current);

    observerRef.current = observer;
  }, [callback]);

  const unobserve = useCallback(() => {
    if (targetRef.current) {
      observerRef.current?.unobserve(targetRef.current);
    }

    observerRef.current = null;
  }, []);

  const scrollAreaCallback = useCallback((rootNode: RootNode) => {
    unobserve();
    scrollAreaRef.current = rootNode;
    observe();
  }, [observe, unobserve]);

  const targetNodeCallback = useCallback((targetNode: TargetNode) => {
    unobserve();
    targetRef.current = targetNode;
    observe();
  }, [observe, unobserve]);

  return {
    scrollAreaCallback,
    targetNodeCallback
  };
};
