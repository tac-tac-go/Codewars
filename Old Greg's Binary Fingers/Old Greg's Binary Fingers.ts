export function binaryFingers(binString: string): string[] {
  const arr = ['Pinkie','Ring','Middle','Index','Thumb'].slice(5-binString.length,5)
  return binString ?  [...binString].map((v,i) => v==="1" ? arr[i] : "").filter(v=> v) : []
}

