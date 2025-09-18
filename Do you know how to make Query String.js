const toQueryString = (obj) => Object.entries(obj).map(([k,v1]) => typeof v1==='object' ? v1.map(v2 => `${k}=${v2}`).join("&") : `${k}=${v1}`).join("&")
