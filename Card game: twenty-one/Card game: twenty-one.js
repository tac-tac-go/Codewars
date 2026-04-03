function twentyOne(card1, card2, card3) {
  let card = {"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":2,"Q":3,"K":4,"A":11}
  let result = [card1,card2,card3].map(v => card[v.replace(/[^0-9JQKA]/g,"")]).reduce((a,b) => a+b,0,)
  if(result<21)return 'less'
  else if(result>21)return 'more'
  else return 'twenty-one' 
}
