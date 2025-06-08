const takeUmbrella = (weather, chance) => weather==='rainy' || (weather==='cloudy' && chance>0.2) || (weather === "sunny" && chance > 0.50);
