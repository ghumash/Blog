import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getErrorState } from './getErrorState'

describe('getErrorState.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getErrorState(state as StateSchema))
      .toEqual('error')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getErrorState(state as StateSchema))
      .toEqual(undefined)
  })
})
