import { CategoryOption, CategoryType } from '../types/category'
import { getCategory } from './category'
describe('category helper', () => {
  it('should return correct category label', () => {
    expect(getCategory(CategoryType.EXPENSE)?.label).toBe('Gider')
  })
  it('should return undefined with incorrect value', () => {
    expect(getCategory('SATIŞ' as CategoryType)).toBeUndefined()
  })
})
