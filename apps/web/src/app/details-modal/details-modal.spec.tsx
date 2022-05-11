import { render } from '@testing-library/react'

import DetailsModal from './details-modal'

describe('DetailsModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsModal />)
    expect(baseElement).toBeTruthy()
  })
})
