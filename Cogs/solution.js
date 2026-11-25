const cogRpm = (cogs) =>
  (cogs[0] / cogs[cogs.length - 1]) * (-1) ** (cogs.length - 1);