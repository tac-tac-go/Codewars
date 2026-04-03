const isValid = query => (query.match(/\w+(?=:)/g) || []).every(v => FILTERS.includes(v))

