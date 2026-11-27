export function sabb(s: string, val: number, happiness: number): string {
  let count = 0;                          
  for (const ch of s.toLowerCase()) {     
    if ("sabbatical".includes(ch)) {      
      count++;                            
    }
  }
  return val + happiness + count > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';
}