import { index } from 'shared/lib/classNames'
import './Loader.scss'
import { memo } from 'react'

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={index('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
))
