import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Image from 'next/image'
import { ShoeResponseTypes, ServerSidePropsDataType } from '../_types'

export const getServerSideProps: GetServerSideProps<ServerSidePropsDataType> = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/newest`)
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

const NewestShoes = ({ serverData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1 className="text-4xl text-gray-600 text-center mt-4 desktop:text-3xl">Today's Releases</h1>
      <div className="grid grid-cols-1 gap-7 w-11/12 mb-4 mx-auto desktop:grid-cols-4 laptop:grid-cols-3 laptop:gap-5">
        {serverData.results.map((shoe: ShoeResponseTypes) => (
          <div key={shoe.id} className="bg-gray-50">
            <div className="relative h-30v">
              {shoe.media.imageUrl ? (
                <Image src={shoe.media.imageUrl} layout="fill" objectFit="contain" alt="shoe" />
              ) : (
                <Image src="/no-image.jpg" layout="fill" objectFit="contain" alt="shoe" />
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
    </>
  )
}

export default NewestShoes
