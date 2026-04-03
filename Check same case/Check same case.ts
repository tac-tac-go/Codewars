export function sameCase(a : string, b : string): number {
  if(!isLetter(a) || !isLetter(b)){
    return -1
  }else if((a.toLowerCase()==a && b.toUpperCase()==b) || (a.toUpperCase()==a && b.toLowerCase()==b)){
    return 0
  }else if((a.toLowerCase()==a && b.toLowerCase()==b) || (a.toUpperCase()==a && b.toUpperCase()==b)){
    return 1
  }else {
    return -1
  }
}

function isLetter(c:string):boolean {
    if (c.length != 1 || c == '_' || c == '$')
        return false;
    if (c.toUpperCase() != c.toLowerCase())
        return true; // Speed up accepting latin letters
    if (c.charCodeAt(0) < 128)
        return false; // Speed up rejecting non-letter ASCII characters
    try {
        eval("function " + c + "(){}");
        return true;
    } catch {
        return false;
    }
}

