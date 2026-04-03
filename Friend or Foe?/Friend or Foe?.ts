export function friend(friends: string[]): string[] { 
  return friends.filter(x => x.length==4)
}
