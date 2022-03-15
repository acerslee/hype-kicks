import { render, screen } from '@testing-library/react'
import AboutPage from '../../pages/about'

describe('about:: page', () => {
  it('should render the about page properly', () => {
    render(<AboutPage />)
    const image = screen.getByAltText(/shoe collection/i)
    const headerText = screen.getByRole('heading', { name: 'About Us' })

    expect(image).toBeInTheDocument()
    expect(headerText).toHaveTextContent('About Us')
  })
})
