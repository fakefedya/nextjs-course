export function declineNounWithNum(
	num: number,
	nouns: [string, string, string],
) {
	const remain = num % 10
	const exceptions = [11, 12, 13, 14]

	if (remain === 1 && !exceptions.includes(num)) {
		return `${num} ${nouns[0]}`
	} else if (remain > 1 && remain < 5 && !exceptions.includes(num)) {
		return `${num} ${nouns[1]}`
	} else {
		return `${num} ${nouns[2]}`
	}
}
