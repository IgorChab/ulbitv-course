import React from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export const ArticleDetailsSkeleton = () => {
  return (
    <>
      <Skeleton borderRadius="50%" width={200} height={200} ml="auto" mr="auto" />
      <Skeleton width="60%" height={35} mt={30} />
      <Skeleton width="30%" height={35} mt={15} />
      <Skeleton height={200} mt={20} />
      <Skeleton height={200} mt={20} />
    </>
  );
};
