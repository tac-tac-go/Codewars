const whatListAmIOn = (actions) => actions.filter(v => /^[bfk]/.test(v)).length>=actions.filter(v => /^[gsn]/.test(v)).length ? "naughty" : "nice"
