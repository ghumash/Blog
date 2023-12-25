import { index, Mods } from 'shared/lib/classNames'
import { CSSProperties, memo, useMemo } from 'react'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(({
  className,
  src,
  size,
  alt,
}: AvatarProps) => {
  const mods: Mods = {}

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size])

  return (
    <img
      src={src}
      alt={alt ?? ''}
      style={styles}
      className={index(cls.Avatar, mods, [className])}
    />
  )
})
