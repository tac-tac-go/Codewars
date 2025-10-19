function fourSeasons(day) {
  if (day > 365) return "The year flew by!";
  if ((day >= 355 && day <= 365) || (day >= 1 && day <= 79)) return "Winter Season";
  if (day >= 80  && day <= 171) return "Spring Season";
  if (day >= 172 && day <= 263) return "Summer Season";
  if (day >= 264 && day <= 354) return "Autumn Season";
}
