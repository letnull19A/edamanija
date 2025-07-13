export type TShop = {
  id: string
  title: string
  imageUrl: string
  color: string
}

export type TProductCategory = {
  id: string
  title: string
  parentId?: string
}

export type TProduct = {
  id: string
  title: string
  imageUrl: string
  price: number
  isAvailible: boolean
  categories: Array<TProductCategory>
  shops?: Array<Omit<TShop, 'imageUrl'>>
}
