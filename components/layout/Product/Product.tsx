import Image from 'next/image'

import { Card } from '@/components/ui/Card/Card'
import { ProductModel } from '@/interfaces/product.interface'

import styles from './Product.module.css'

interface ProductProps {
	product: ProductModel
	className?: string
}

export function Product({ className, product, ...props }: ProductProps) {
	return (
		<Card {...props}>
			<div className={styles.logo}>
				<Image width={70} height={70} src={product.image} alt={product.title} />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{product.price}</div>
			<div className={styles.credit}>{product.credit}</div>
		</Card>
	)
}
