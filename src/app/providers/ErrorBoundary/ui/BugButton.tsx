import { Button } from 'shared/ui/Button'
import React, { CSSProperties, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Component for testing ErrorBoundary

interface BugButtonProps {
  style?: CSSProperties;
}

export const BugButton = ({ style }: BugButtonProps) => {
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
      onClick={onThrow}
      style={style}
    >
      {t('Throw error')}
    </Button>
  )
}
