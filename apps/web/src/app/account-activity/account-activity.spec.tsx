import { render } from '@testing-library/react'
import AccountActivity from './account-activity'
import { CurrencyValue } from '@magiclick/utils/types/currency'

describe('AccountActivity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AccountActivity
        id={1}
        data={{
          id: 1,
          accountId: 1,
          description: 'asd',
          amount: 100,
          type: 0,
          createdAt: null,
          categoryId: 1,
        }}
        currency={CurrencyValue.TRY}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
  it('should not dipslay value ', () => {
    const { getByTestId } = render(<AccountActivity />)
    expect(getByTestId('desc').innerHTML).toBeFalsy()
    expect(getByTestId('category').innerHTML).toBeFalsy()
  })
})
