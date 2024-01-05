import React, { type FC } from 'react';

interface OptionalRenderProps {
  condition: boolean
  children: React.ReactNode
}

export const OptionalRender: FC<OptionalRenderProps> = ({
  children,
  condition
}) => {
  return (
    <>
      {condition && children}
    </>
  );
};
