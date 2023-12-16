import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text'
import { getLoadingState } from '../../model/selectors/getLoadingState/getLoadingState'
import { getErrorState } from '../../model/selectors/getErrorState/getErrorState'
import { getUsernameState } from '../../model/selectors/getUsernameState/getUsernameState'
import { getPasswordState } from '../../model/selectors/getPasswordState/getPasswordState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getUsernameState)
  const password = useSelector(getPasswordState)
  const error = useSelector(getErrorState)
  const isLoading = useSelector(getLoadingState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({
      username,
      password,
    }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Login')} />
      {error && <Text text={t('The username or password is incorrect!')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        className={cls.input}
        type="text"
        placeholder={t('Username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLogin}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  )
})
