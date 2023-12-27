import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMounted, userActions } from 'entities/User'
import { useTheme } from 'app/providers/ThemeProvider'

function App() {
  const dispatch = useDispatch()
  const mounted = useSelector(getUserMounted)
  const { theme } = useTheme()

  useEffect(() => {
    document.body.classList.add(theme)
    dispatch(userActions.initAuthData())
  }, [dispatch, theme])

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
