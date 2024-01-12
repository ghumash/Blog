import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Button, ButtonTheme } from '../../Button'
import { Icon } from '../../Icon'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text,
  } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <Icon Svg={CopyIcon} className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  )
})