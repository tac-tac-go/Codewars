function finder(B) {
  for ( let i=0; i<B.length; i++ ) if( B[i][0] ) return i;
  return "There is no golden ticket!";
}
