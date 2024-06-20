import { UserT } from '../store/usersReducer.ts'

export type CatalogPropsT = {
  onImageClick: (url: string) => void
}

export type UserItemPropsT = {
  user: UserT
  onImageClick: (url: string) => void
}

export type AlbumListPropsT = {
  userId: string
  onImageClick: (url: string) => void
}

export type AlbumT = {
  albumId: string
  title: string
  userId: string
}

export type AlbumItemsPropsT = {
  album: AlbumT
  onImageClick: (url: string) => void
}

export type PhotoListPropsT = {
  albumId: string
  onImageClick: (url: string) => void
}

export type PhotoPropsT = {
  index: number
  title: string
  url: string
  isFav?: boolean
  onImageClick: (url: string) => void
}

export type PhotoT = {
  albumId: string
  id: string
  title: string
  url: string
}
