type ProductVariant = { name: string; price: number }

type Product = {
  id: string
  name: string
  img: string
  variants: ProductVariant[]
  description: string
}
