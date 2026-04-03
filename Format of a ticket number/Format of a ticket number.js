const nbrValidTickets = (tickets) => tickets.filter(v => /^[a-z][0-9][a-z]{4}$/i.test(v)).length
