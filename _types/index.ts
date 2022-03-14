export interface ShoeResponseTypes {
  id: string
  brand: string
  colorway: string
  gender: string
  media: {
    imageUrl: string
    smallImageUrl: string
    thumbUrl: string
  }
  releaseDate: string
  retailPrice: number
  styleId: string
  shoe: string
  name: string
  title: string
  year: number
}

export interface ServerSidePropsDataType {
  serverData: {
    count: number
    results: ShoeResponseTypes[]
  }
}
