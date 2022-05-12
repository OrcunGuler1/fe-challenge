import { CategoryType, CategoryOption } from '../types/category'
import { find } from 'rambdax'

export const categoryList: CategoryOption[] = [
  { type: CategoryType['Market'], label: 'Market' },
  { type: CategoryType['Gelir'], label: 'Gelir' },
  { type: CategoryType['Gider'], label: 'Gider' },
  { type: CategoryType['Diğer'], label: 'Diğer' },
]

export const getCategory = (
  value: CategoryType,
): CategoryOption | undefined => {
  return find(category => category.type === value, categoryList)
}
