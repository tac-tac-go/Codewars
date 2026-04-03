const equalize = (array) => array.map((v,i) => array[i]-array[0] >=0 ? "+"+String(array[i]-array[0]) : String(array[i]-array[0]))
