import React, { type FC, type ReactNode } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

interface HStackProps extends Omit<FlexProps, 'direction' | 'align'> {
  className?: string
  children: ReactNode
}

export const HStack: FC<HStackProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <Flex
      className={className}
      direction='row'
      align='center'
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
