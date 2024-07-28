import React, { type FC, type ReactNode } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

interface VStackProps extends Omit<FlexProps, 'direction'> {
  className?: string
  children: ReactNode
}

export const VStack: FC<VStackProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <Flex
      className={className}
      direction='column'
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
