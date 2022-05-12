import { render, screen } from '@testing-library/react'

import Button from './button'

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button onclick={() => 'test'} children="buton" />)
    const element = screen.getByTestId('button') as HTMLButtonElement
    expect(element).toBeInstanceOf(HTMLButtonElement)
    expect(element.onclick).toBeInstanceOf(Function)
  })
  it('should render children', () => {
    render(
      <Button onclick={() => 'test'}>
        <div></div>
      </Button>,
    )
    const element = screen.getByTestId('button') as HTMLButtonElement
    expect(element).toBeTruthy()
  })
})
