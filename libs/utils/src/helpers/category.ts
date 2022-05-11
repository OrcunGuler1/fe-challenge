import { CategoryType, CategoryOption } from '../types/category'
import { find } from 'rambdax'

export const categoryList: CategoryOption[] = [
  { type: CategoryType.MARKET, label: 'Market' },
  { type: CategoryType.INCOME, label: 'Gelir' },
  { type: CategoryType.TRANSACTION, label: 'İşlem' },
  { type: CategoryType.EXPENSE, label: 'Gider' },
  { type: CategoryType.OTHER, label: 'Diğer' },
]

export function getCategory(value: CategoryType): CategoryOption | undefined {
  return find(category => category.type === value, categoryList)
}
