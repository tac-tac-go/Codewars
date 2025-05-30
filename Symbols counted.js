const transform = (s) =>  [...new Set(s.split(""))].map(v1 => s.split("").filter(v2 => v2===v1).length>=2 ? v1+String(s.split("").filter(v2 => v2===v1).length) : v1).join("");
