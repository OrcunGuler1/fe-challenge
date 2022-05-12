import * as yup from 'yup'
import { CategoryType } from '../types/category'

export const CategoryCreateSchema = yup.object().shape({
  type: yup
    .number()
    .oneOf([
      CategoryType['Market'],
      CategoryType['Gider'],
      CategoryType['Gelir'],
      CategoryType['Diğer'],
    ]),
})
