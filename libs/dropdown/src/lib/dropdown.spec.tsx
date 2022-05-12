import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dropdown from './dropdown'

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dropdown />)
    expect(baseElement).toBeTruthy()
  })
  it('should render options', () => {
    const { getByText } = render(
      <Dropdown options={['ASD', 'DAS']} onChange={() => console.log()} />,
    )
    expect(getByText('ASD', { selector: 'option' })).toBeTruthy()
  })
})
