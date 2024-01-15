import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, SelectOption } from 'shared/ui/Select'
import { SortOrder } from 'shared/types/sort'
import { ArticleSortField } from '../../model/consts'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    onChangeOrder,
    onChangeSort,
    order,
    sort,
  } = props
  const { t } = useTranslation('articles')

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascent'),
    },
    {
      value: 'desc',
      content: t('descent'),
    },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  )
})
