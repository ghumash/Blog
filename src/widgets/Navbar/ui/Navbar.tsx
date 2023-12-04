import cls from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          to={'/'}
          theme={AppLinkTheme.PRIMARY}
        >
          General
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>
          About
        </AppLink>
      </div>
    </div>
  )
}
