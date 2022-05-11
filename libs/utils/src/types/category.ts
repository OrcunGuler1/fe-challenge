export enum CategoryType {
  MARKET = 'Market',
  INCOME = 'Gelir',
  TRANSACTION = 'İşlem',
  EXPENSE = 'Gider',
  OTHER = 'Diğer',
}

export type CategoryOption = {
  type: CategoryType
  label: string
}
