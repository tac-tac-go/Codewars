const currencyBRL = (number=0) => `R$ ${String(number.toFixed(2)).replace(".",",")}`
