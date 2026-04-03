const trickyDoubles = (n) => String(n).length%2===0 && String(n).slice(0,String(n).length/2)===String(n).slice(String(n).length/2,) ? n : n*2
