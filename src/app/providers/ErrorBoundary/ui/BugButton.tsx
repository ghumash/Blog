import { Button, ButtonTheme } from 'shared/ui/Button'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ErrorIcon from 'shared/assets/icons/error.svg'

// Component for testing ErrorBoundary

interface BugButtonProps {
  className?: string;
  collapsed?: boolean;
}

export const BugButton = ({
  collapsed,
  className,
}: BugButtonProps) => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      className={className}
      onClick={onThrow}
    >
      {collapsed ? <ErrorIcon /> : t('Throw error')}
    </Button>
  )
}
