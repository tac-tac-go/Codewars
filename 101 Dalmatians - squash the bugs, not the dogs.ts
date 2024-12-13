export function howManyDalmatians(num : number): string{
  
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    let respond = num <= 10 ? dogs[0] : (num <= 50 ? dogs[1] : (num == 101 ? dogs[3] : dogs[2]))

    return respond
}

