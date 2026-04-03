const getWeight = (name) => name.replace(/[^a-z]/ig,"").split("").map(v => v.toLowerCase()===v ? v.toUpperCase().charCodeAt(0) : v.toLowerCase().charCodeAt(0)).reduce((a,b) => a+b,0)
