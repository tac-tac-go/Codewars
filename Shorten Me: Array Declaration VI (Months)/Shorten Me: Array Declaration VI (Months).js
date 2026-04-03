const array=()=>[...Array(24)].map((_,i)=>new Intl.DateTimeFormat('en',{month:'long'}).format(new Date(0,i)))
