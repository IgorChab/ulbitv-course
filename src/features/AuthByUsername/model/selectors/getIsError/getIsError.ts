import { type StateSchema } from 'app/providers/StoreProvider';

export const getIsError = (state: StateSchema) => state.login?.isError;
