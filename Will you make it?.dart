bool zeroFuel(int distance, int mpg, int fuelLeft) {
  return mpg*fuelLeft >= distance;
}
