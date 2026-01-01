function dropzone(fire,dropzones) {
  let euclid = 100000000;
  let result = [];
  for(let i=0;i<dropzones.length;i++){
    const tmp = Math.sqrt(Math.pow(fire[0]-dropzones[i][0],2)+Math.pow(fire[1]-dropzones[i][1],2))
    if(euclid > tmp){
      euclid = tmp
      result = dropzones[i]
    }
  }
  return result
}
