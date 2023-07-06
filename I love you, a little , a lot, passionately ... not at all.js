function howMuchILoveYou(nbPetals) {
  let result = ["I love you","a little","a lot","passionately","madly","not at all"]
  return result[(nbPetals-1)%6]
}

