const convertPalindromes =(numbers) => numbers.map(v => String(v) === String(v).split("").reverse().join("") ? 1 : 0)
