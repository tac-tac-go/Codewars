const flyBy = (lamps, drone) => 
  [...lamps].fill("o", 0, drone.indexOf("T") + 1).join("");
