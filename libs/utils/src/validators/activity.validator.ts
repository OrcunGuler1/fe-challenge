import * as yup from 'yup'

export const ActivityCreateSchema = yup.object().shape({
  accountId: yup.number().required(),
  description: yup.string().required(),
  amount: yup.number().required(),
  type: yup.number().oneOf([0, 1]),
  createdAt: yup.date().required(),
})
