var capitals = function (word) {
	return word.split("").map((v,i) => v===v.toUpperCase() ? i : -1).filter(v => v>=0)
};
