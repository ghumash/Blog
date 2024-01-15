import { StateSchema } from 'app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

import { UserRole } from '../consts'

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
export const isUserDeveloper = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.DEVELOPER)))
