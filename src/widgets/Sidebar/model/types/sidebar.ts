import type React from 'react';

export interface SidebarItemType {
  path: string
  text: string // need pass localization key
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}
