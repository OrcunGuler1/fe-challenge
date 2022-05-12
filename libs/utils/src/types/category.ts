export enum CategoryType {
  'Gelir' = 1,
  'Gider' = 2,
  'Market' = 3,
  'Diğer' = 4,
}

export type CategoryOption = {
  type: CategoryType
  label: string
}
