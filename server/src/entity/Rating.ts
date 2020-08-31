import { EntityTypeMethod } from './entityTypes'

type RatingGetParams = {
  url: string
  rate: number
}

type RatingPostParams = {
  url: string
  rate: number
}

type Rating = {
  url: string
  averageRate: number
  totalRate: number
}

export const RatingHandler: EntityTypeMethod<
  Rating,
  RatingGetParams,
  RatingPostParams
> = {
  get(params: RatingGetParams) {
    return {
      url: params.url,
      averageRate: 2.5,
      totalRate: 100,
    }
  },
  post(params: RatingGetParams) {
    return {
      url: params.url,
      averageRate: params.rate,
      totalRate: 100,
    }
  },
}
