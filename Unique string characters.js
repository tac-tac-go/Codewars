function solve(a,b){
  return (a+b).split("").filter((valA) => !(a.split("").filter((val) => b.split("").includes(val))).includes(valA)).join("")
};
