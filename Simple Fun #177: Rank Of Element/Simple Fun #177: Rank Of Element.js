const rankOfElement = (arr, i) => arr.slice(0,i).filter(v => v<=arr[i]).length+arr.slice(i+1,).filter(v => arr[i]>v).length
