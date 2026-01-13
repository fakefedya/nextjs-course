import { ProductModel } from '@/interfaces/product.interface'

interface ProductProps {
	product: ProductModel
	className?: string
}

export function Product({ className, product, ...props }: ProductProps) {
	return <div {...props}>{product.title}</div>
}
