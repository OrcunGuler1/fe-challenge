import * as yup from 'yup'
import { CategoryType } from '../types/category'

export const CategoryCreateSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([
      CategoryType.MARKET,
      CategoryType.INCOME,
      CategoryType.TRANSACTION,
    ]),
})
