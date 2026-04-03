const teamBuilding = (team) => {
  let team_mate = Array.from(new Set(team.split(",")));
  if(team_mate.length<4){
    return 'Game canceled'
  }else{
    let result = {};
    result["captain"]=team_mate[0];
    result["referee"]=team_mate[1];
    result["players"]=team_mate.slice(2);
    return result; 
  }
};
