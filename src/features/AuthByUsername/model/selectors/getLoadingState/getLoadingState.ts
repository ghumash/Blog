import { StateSchema } from 'app/providers/StoreProvider'

export const getLoadingState = (state: StateSchema) => state?.loginForm?.isLoading
