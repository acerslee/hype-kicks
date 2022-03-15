import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Search from '../components/search'
import axios from 'axios'
import Image from 'next/image'
import { window } from 'browser-monads'
import { ShoeResponseTypes, ServerSidePropsDataType } from '../_types'

export const getServerSideProps: GetServerSideProps<ServerSidePropsDataType> = async ({
  query,
}) => {
  try {
    const res = await fetch(`http://localhost:3000/api/shoes/${query.brand}`)
    const serverData = await res.json()

    return {
      props: {
        serverData,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Brandpage = ({ serverData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const { query } = router
  const [shoeData, setShoeData] = useState<ShoeResponseTypes[]>(serverData.results)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  //for mobile view only
  const [itemsToShow, setItemsToShow] = useState<number>(10)
  const [mobileData, setMobileData] = useState<ShoeResponseTypes[]>([])

  useEffect(() => {
    axios
      .get(`/api/shoes/${query.brand}`)
      .then(({ data }) => {
        if (data.count === 0) {
          setErrorMessage(true)
        } else {
          setErrorMessage(false)
          setShoeData(data.results)
          if (window.screen.width <= 711) {
            setMobileData(data.results)
          }
        }
      })

      .catch(err => console.error(err))
  }, [query.brand])

  const renderNewList = async (gender: string = 'none', year: string = 'none'): Promise<void> => {
    try {
      setItemsToShow(10)

      if (gender !== 'none' && year !== 'none') {
        const response = await axios.post(`/api/shoes/${query.brand}`, { year })
        const shoeResults = await response.data.results
        const shoeResultFilter = await shoeResults.filter(
          (shoe: { gender: string }) => shoe.gender === gender,
        )
        setShoeData(shoeResultFilter)
        return
      }

      if (gender !== 'none') {
        const results = shoeData.filter((shoe: { gender: string }) => shoe.gender === gender)
        setShoeData(results)
      }

      if (year !== 'none') {
        const response = await axios.post(`/api/shoes/${query.brand}`, { year })
        setShoeData(response.data.results)
      }
    } catch (err) {
      console.error('Issue with API call', err)
    }
  }

  //for mobile view only
  const showMoreLoader = (): void => {
    setShoeData(mobileData.slice(0, itemsToShow + 10))
    setItemsToShow(itemsToShow + 10)
  }

  useEffect(() => {
    if (window.screen.width <= 711) {
      const slicedShoeData = mobileData.slice(0, 10)
      setShoeData(slicedShoeData)
      setItemsToShow(10)
    }
  }, [mobileData])

  return (
    <>
      <Search renderNewList={renderNewList} />
      {shoeData.length > 0 && (
        <div className="grid grid-cols-1 gap-7 w-11/12 mb-4 mx-auto laptop:grid-cols-2 laptop:gap-4 desktop:grid-cols-4 ">
          {shoeData.map((shoe: ShoeResponseTypes) => (
            <div key={shoe.id} className="bg-gray-50">
              <div className="relative h-30v">
                {shoe.media.imageUrl ? (
                  <Image
                    src={shoe.media.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt="shoe"
                    priority
                  />
                ) : (
                  <Image src="/no-image.jpg" layout="fill" objectFit="cover" alt="shoe" priority />
                )}
              </div>
              <div className="ml-3">
                <p>Release Date: {shoe.releaseDate}</p>
                <p>{shoe.title}</p>
                <p className="text-gray-500">{shoe.colorway}</p>
                <p className="text-gray-500">{shoe.gender}</p>
                <p className="mt-2">${shoe.retailPrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {window.screen.width <= 711 && !errorMessage && (
        <>
          {itemsToShow >= mobileData.length ? (
            <p className="text-center mb-2">No more items to show.</p>
          ) : (
            <p className="text-center mb-2" onClick={() => showMoreLoader()}>
              Click here to load more items
            </p>
          )}
        </>
      )}
      {errorMessage && (
        <div className="h-80v flex justify-center items-center">
          <p className="text-xl laptop:text-2xl desktop:text-4xl">
            Sorry, no shoes available at the moment!
          </p>
        </div>
      )}
    </>
  )
}

export default Brandpage
