import { render } from '@testing-library/react'

import AccountAddModal from './account-add-modal'

describe('AccountAddModal', () => {
  it('should render successfully', () => {
    const { getByTestId, getByLabelText } = render(<AccountAddModal />)
    expect(getByTestId('container')).toBeInstanceOf(HTMLDivElement)
  })
  it('should have input element', () => {
    const { getByLabelText } = render(<AccountAddModal />)
    expect(getByLabelText('Adı')).toBeInstanceOf(HTMLInputElement)
  })
  it('should have select element', () => {
    const { getByLabelText } = render(<AccountAddModal />)
    expect(getByLabelText('Tipi')).toBeInstanceOf(HTMLSelectElement)
  })
})
