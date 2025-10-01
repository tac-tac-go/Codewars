function furthestDistance(arr){
   let min_v = -Infinity
   for(let i=0;i<arr.length-1;i++){
     for(let j=i+1;j<arr.length;j++){
       let tmp = Math.round((Math.sqrt((arr[i][0]-arr[j][0])**2+(arr[i][1]-arr[j][1])**2))*100)/100
       if(tmp > min_v )min_v = tmp
     }
   }
  return min_v
}
