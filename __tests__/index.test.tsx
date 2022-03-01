import { render, screen } from '@testing-library/react'
import Home from '../pages'

it('should render the Home page', () => {
  render(<Home />)

  const mainPageHeading = screen.getByText('Explore Your Next Addition.')

  expect(mainPageHeading).toBeInTheDocument
})