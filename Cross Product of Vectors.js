function crossProduct (v1, v2) {
  if(typeof v1=="object" && typeof v2=="object" &&  v1.length==3 && v2.length==3){
    return [v1[1]*v2[2]-v1[2]*v2[1],v1[2]*v2[0]-v1[0]*v2[2],v1[0]*v2[1]-v1[1]*v2[0]] 
  }
  throw "Arguments are not 3D vectors!"
}
