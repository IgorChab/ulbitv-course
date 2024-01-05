import type React from 'react';
import { type FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode
  element?: HTMLElement | Element | null
}

export const Portal: FC<PortalProps> = ({
  children,
  element
}) => {
  return createPortal(children, element || document.body);
};
