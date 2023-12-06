import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const Loader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.Loader, {}, [className])} />
)
