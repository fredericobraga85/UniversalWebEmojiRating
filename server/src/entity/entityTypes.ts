import { RatingHandler } from './Rating'

export interface EntityTypeMethod<EntityType, GetParams, PostParams> {
  get: (params: GetParams) => EntityType
  post: (params: PostParams) => EntityType
}

export const entityTypeHandlers: {
  [key: string]: EntityTypeMethod<any, any, any>
} = {
  rating: RatingHandler,
}
