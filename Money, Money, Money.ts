export function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
    let year = 0;
    while(principal < desired){
      principal += (principal*interest) - (principal*interest*tax) 
      year +=1
    }
    return year
}
