const reverseMessage = (s) => s.toLowerCase().split``.reverse().join``.replace(/( |^)./g,m=>m.toUpperCase())
