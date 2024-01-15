import { type StateSchema } from 'app/providers/StoreProvider';

export const getIsLoginError = (state: StateSchema) => state.login?.isError;
