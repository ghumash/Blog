import { index } from 'shared/lib/classNames'
import { Loader } from 'shared/ui/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={index(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
)
