import { type StateSchema } from 'app/providers/StoreProvider';

export const getIsLoginLoading = (state: StateSchema) => state.login?.isLoading;
