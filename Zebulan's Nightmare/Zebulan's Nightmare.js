function zebulansNightmare(functionName) {
  return functionName.replace(/_([a-z])/g,(_,match) => match.toUpperCase())
}

