import type { ProductModel } from '@/interfaces/product.interface'

import { SortEnum } from './Sort'

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating }

export interface SortReducerState {
	sort: SortEnum
	products: ProductModel[]
}

export const SortReducer = (
	state: SortReducerState,
	action: SortActions,
): SortReducerState => {
	switch (action.type) {
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: [...state.products].sort(
					(a, b) => (b.initialRating ?? 0) - (a.initialRating ?? 0),
				),
			}

		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: [...state.products].sort(
					(a, b) => (a.price ?? 0) - (b.price ?? 0),
				),
			}

		default:
			return state
	}
}
