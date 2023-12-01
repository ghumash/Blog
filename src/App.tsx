import {Link, Route, Routes} from "react-router-dom"
import "./styles/index.scss"
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>General</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy/>}/>
          <Route path={'/about'} element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
export default App
