import { StateSchema } from 'app/providers/StoreProvider'

export const getUsernameState = (state: StateSchema) => state?.loginForm?.username
