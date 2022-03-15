import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../pages'
import { ShoeResponseTypes } from '../../_types'

describe('The home page should render properly', () => {
  // it('should show banner on the top of the main image', () => {
  //   const value = getServerSideProps()
  //   expect(value).toEqual({
  //     props: {
  //       count: 0,
  //       results: [],
  //     },
  //   })
  //   render(<Home serverData={serverData} />)

  //   const mainPageHeading = screen.getByText('Explore Your Next Addition.')
  //   expect(mainPageHeading).toBeInTheDocument
  // })

  it('tests useState setState to be called', () => {
    const setStateMock = jest.fn()
    const useStateMock: any = (useState: ShoeResponseTypes[]) => [useState, setStateMock]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
  })
})

// describe('Newest shoes', () => {

//   let req: any
//   let res: any

//   beforeEach(() => {
//     req = {}
//     res = {
//       status: jest.fn(() => res),
//       end: jest.fn()
//     }
//   })
//   it.only('should call newest API', async () => {
//     req.method='GET'

//     const response = await getNewestShoes(req, res)
//     expect(res.status).toBeCalledWith(200)
//     expect(res.end).toHaveBeenCalledTimes(1)
//   })

//   // it('should display the SEE MORE if there more than 5 new shoes', async () => {
//   //   render(<Home />)
//   //   // const { req, res } = createMocks({
//   //   //   method: 'GET',
//   //   // })

//   //   // const response = await getNewestShoes(req, res)
//   //   // console.log(res._getData()).

//   //   const seeMoreText = screen.getByText('SEE MORE')
//   //   expect(seeMoreText).toBeInTheDocument()
//   // })

//   // it('should return false when no data is returned from the newest API', async () => {
//   //   const { req, res } = createMocks({
//   //     method: 'GET',
//   //   })

//   //   const data = await getNewestShoes(req, res)
//   //   expect(fetch).toHaveBeenCalledTimes(1)
//   //   expect(data).toBe(false)
//   // })

//   it('should take you to the newest page when you click on SEE MORE', () => {
//     render(<Home />)

//   })
// })
