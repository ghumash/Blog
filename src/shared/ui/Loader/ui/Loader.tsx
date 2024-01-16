import { memo } from 'react'
import './Loader.scss'
import { classNames } from '@/shared/lib/classNames'

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
))
