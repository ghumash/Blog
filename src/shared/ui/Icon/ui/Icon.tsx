import { memo, SVGProps, VFC } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    inverted,
  } = props

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
  )
})
