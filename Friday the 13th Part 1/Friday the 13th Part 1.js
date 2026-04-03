const killcount = (counselors, jason) => counselors.filter(([a,b]) => b<jason).map(([a,b]) => a)
