export function getGrade(s1: number, s2: number, s3: number): string {
  let avg = (s1+s2+s3)/3
  if(avg>=90){
    return 'A'
  }else if(avg>=80){
    return 'B'
  }else if(avg>=70){
    return 'C'
  }else if(avg>=60){
    return 'D'
  }else{
    return 'F'
  }
}
