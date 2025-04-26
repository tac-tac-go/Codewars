const itinerary = (travel) => travel.reduce((r,t) => r.concat(r[r.length-1] !==t.in ? [t.in,t.out] : t.out),[]).join("-")
