import {
	ReviewFormHookProps,
	ReviewSentResponse,
} from '@/interfaces/review.interface'

import { API } from './api'

export async function postReview(
	productId: string,
	formData: ReviewFormHookProps,
): Promise<ReviewSentResponse> {
	const res = await fetch(API.review.createDemo, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			productId,
			...formData,
		}),
	})
	return res.json()
}
