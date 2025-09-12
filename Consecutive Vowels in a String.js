function getTheVowels(word) {
  word = word.replace(/[^aeiou]/gi,"")
  let count = 0
  const arr = ['a','e','i','o','u']
  let index = 0
  for(let tmp of word){
    console.log(tmp)
    if(arr[index]===tmp){
      count+=1
      index=(index+1)%5
    }
  }
  return count
}
