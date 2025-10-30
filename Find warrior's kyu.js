function getKyu(ar,n){
	const ix = [0,2,4,7,10,13,17,21];
	return ix.findIndex(e => e >= ar.sort((a,b) => a - b).indexOf(n)) + 1;
}
