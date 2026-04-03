const isDoubleton = n => new Set(String(n)).size === 2 ;
const doubleton = n => isDoubleton(n+1) ? n+1 : doubleton(n+1) ;
