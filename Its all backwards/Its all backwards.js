const flipper = (stringArr) => stringArr.reverse().map((v) => v.length > 1 ? v.slice(0,v.length-1).toLowerCase()+v.slice(v.length-1,).toUpperCase() : v).join(" ")
