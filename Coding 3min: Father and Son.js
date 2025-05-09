const sc = (s) => s.split("").filter(v => v === v.toUpperCase() ? s.split("").includes(v.toLowerCase()) : s.split("").includes(v.toUpperCase())).join("")

