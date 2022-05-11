import { render } from '@testing-library/react'

import ActivityItem from './activity-item'

describe('ActivityItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActivityItem />)
    expect(baseElement).toBeTruthy()
  })
})
