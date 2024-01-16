import { StateSchema } from '@/app/providers/StoreProvider'
import { getPasswordState } from './getPasswordState'

describe('getPasswordState.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123123',
      },
    }
    expect(getPasswordState(state as StateSchema))
      .toEqual('123123')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getPasswordState(state as StateSchema))
      .toEqual('')
  })
})
