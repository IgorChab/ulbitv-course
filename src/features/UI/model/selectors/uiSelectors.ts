import { type StateSchema } from 'app/providers/StoreProvider';

export const getScrollPosition = (state: StateSchema, pathname: string) => (
  state.ui.scroll[pathname] || 0
);
