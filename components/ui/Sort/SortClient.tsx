'use client'

import { Sort, SortEnum } from './Sort'

export function SortClient() {
	return <Sort sort={SortEnum.Price} setSort={() => {}} />
}
