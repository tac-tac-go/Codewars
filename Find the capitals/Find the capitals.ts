export function capitals (word: string): number[] {
	return word.split("").map((e,i) => e.toUpperCase()===e ? i : -1).filter(v => v>=0)
}
