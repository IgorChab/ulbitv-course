import { type StateSchema } from 'app/providers/StoreProvider';

export const getIsOpenLoginModal = (state: StateSchema) => state.login.isOpenLoginModal;
