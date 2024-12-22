function reverseMiddle(array) {
  let even = array.slice(Math.floor(array.length/2)-1,Math.floor(array.length/2)+1);
  let odd =  array.slice(Math.floor(array.length/2)-1,Math.floor(array.length/2)+2);
  even.reverse();
  odd.reverse();
	return array.length%2===0 ?  even : odd;
}
