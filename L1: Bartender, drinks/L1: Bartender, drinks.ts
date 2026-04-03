interface arr_type {
  [key: string]:string
}

const map_arr:arr_type = {
  "jabroni":"Patron Tequila",
  "school counselor":"Anything with Alcohol",
  "programmer":"Hipster Craft Beer",
  "bike gang member":"Moonshine",
  "politician":"Your tax dollars",
  "rapper":"Cristal"
}

export function getDrinkByProfession(profession:string):any{
  return map_arr[profession.toLowerCase()] ?? "Beer"
}
