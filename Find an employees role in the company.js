function findEmployeesRole(name) {
  for(let tmp of employees){
    if(tmp.firstName+" "+tmp.lastName===name)return tmp.role
  }
  return "Does not work here!"
}
