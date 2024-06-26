function arithmeticSequenceElements(a, d, n) {
	return [...Array(n).keys()].map(i => a+d*i).join(", ")
}
