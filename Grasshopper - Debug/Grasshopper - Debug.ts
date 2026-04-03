export function weatherInfo(temp: number): string {
  const c  = convertToCelsius(temp)
  if (c <= 0){
    return `${c} is freezing temperature`
  }
  else{
     return `${c} is above freezing temperature`
  }
}

export function convertToCelsius(temperature: number): number {
  const celsius = Math.round(((temperature - 32) * (5/9))* 100000)/100000
  return celsius
}
