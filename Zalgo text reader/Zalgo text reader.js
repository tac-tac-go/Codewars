const readZalgo = (zalg) => zalg.split("").filter(v => /^[\x00-\x7F]*$/.test(v)).join("")
