import { CurrencyOption, CurrencySign, CurrencyValue } from '../types/currency'
import { find, prop } from 'rambdax'

export const currencyList: CurrencyOption[] = [
  { value: CurrencyValue.TRY, label: 'Türk Lirası', sign: CurrencySign.TRY },
  {
    value: CurrencyValue.USD,
    label: 'Amerikan Doları',
    sign: CurrencySign.USD,
  },
  {
    value: CurrencyValue.GBP,
    label: 'İngiliz Sterlini',
    sign: CurrencySign.GBP,
  },
]

export const getCurrency = (
  value: string | CurrencyValue | undefined,
): CurrencyOption | undefined => {
  if (value === undefined) return 
  return find(currency => currency.value === value, currencyList)
}

export const getCurrencySign = (
  value: CurrencyValue | string | undefined,
): string | undefined => {
  const option = getCurrency(value)
  if (option) {
    return prop('sign', option)
  }
  return
}
