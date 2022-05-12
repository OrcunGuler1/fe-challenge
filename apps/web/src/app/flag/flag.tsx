import './flag.module.scss'

/* eslint-disable-next-line */
export interface FlagProps {
  currency: string | undefined
}

export const Flag = ({ currency }: FlagProps) => {
  if (currency === 'TRY') return <img src="/assets/TR.svg" alt="turkish-flag" />
  if (currency === 'USD') return <img src="/assets/USA.svg" alt="usd-flag" />
  if (currency === 'GBP') return <img src="/assets/UK.svg" alt="gbp-flag" />
  return null
}

export default Flag
