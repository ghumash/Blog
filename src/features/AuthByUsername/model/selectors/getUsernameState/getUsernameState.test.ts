import { StateSchema } from '@/app/providers/StoreProvider'
import { getUsernameState } from './getUsernameState'

describe('getUsernameState.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123123',
      },
    }
    expect(getUsernameState(state as StateSchema))
      .toEqual('123123')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getUsernameState(state as StateSchema))
      .toEqual('')
  })
})
