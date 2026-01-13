import { ProductModel } from '@/interfaces/product.interface'

interface ProductProps {
	product: ProductModel
	className?: string
}

export function Product({ ...props }: ProductProps) {
	return (
		<header {...props}>
			<h1>Header</h1>
		</header>
	)
}
