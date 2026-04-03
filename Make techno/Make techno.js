const perc = (mins) => 
  typeof mins !== 'number' || mins < 1 || mins > 100 
    ? "invalid track time" 
    : [
        `${Math.round(120 * mins)} kicks`,
        `${Math.round(240 * mins)} hihats`,
        `${Math.round(60 * mins)} claps`
      ];
