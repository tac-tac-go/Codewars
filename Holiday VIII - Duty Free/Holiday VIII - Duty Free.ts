export function dutyFree(price: number, discount: number, holiday_cost: number): number{
  return Math.floor(holiday_cost/(price*(discount/100)))
}
