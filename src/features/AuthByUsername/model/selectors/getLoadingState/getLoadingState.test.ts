import { StateSchema } from 'app/providers/StoreProvider'
import { getLoadingState } from './getLoadingState'

describe('getLoadingState.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoadingState(state as StateSchema))
      .toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoadingState(state as StateSchema))
      .toEqual(false)
  })
})
