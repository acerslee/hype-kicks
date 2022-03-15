import Navbar from '../../components/navbar'
import { getAllByRole, render, screen } from '@testing-library/react'

describe('navbar:: component', () => {
  it('should render navbar component successfully', () => {
    render(<Navbar />)
    const logoNavItem = screen.getByAltText(/shoe brand/i)
    const brandNavItem = screen.getByText(/brands/i)
    const aboutNavItem = screen.getByText(/about/i)

    expect(logoNavItem).toBeInTheDocument()
    expect(brandNavItem).toBeInTheDocument()
    expect(aboutNavItem).toBeInTheDocument()
  })
})
