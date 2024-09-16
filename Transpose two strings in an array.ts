export function transposeTwoStrings(array:string[]):string{
  const long = array[0].length>=array[1].length?array[0]:array[1];
	return [...long].map((_,i) => (array[0][i]||' ')+' '+(array[1][i]||' ')).join('\n');
}
