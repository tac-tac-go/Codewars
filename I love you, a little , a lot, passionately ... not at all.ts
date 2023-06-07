export function howMuchILoveYou(petals: number): string{
  let result: string[] = ["I love you","a little","a lot","passionately","madly","not at all"]
  return result[(petals-1)%6]
}
