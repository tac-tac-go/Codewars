function translateToAlienLanguage(string) {
  
  string = string.toLowerCase();
  let str='';
  let output=[];
  const vowels= ['a','e','i','o','u'];
  
  string.split('').forEach((c)=>{
    if(vowels.includes(c)){
      str+=c;
    }
    str+=c;
  })
  
  str.split(' ').forEach(word=>{
    output.push(word.split('').reverse().join(''));
  })
  return output.join(' ');
}
