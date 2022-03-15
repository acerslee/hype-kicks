import Footer from '../../components/footer'
import { render, screen } from '@testing-library/react'

describe('footer:: component', () => {
  it('should render footer component successfully', () => {
    render(<Footer />)
    const footer = screen.getByText(/hype kicks/i)
    expect(footer).toBeInTheDocument()
  })
})
