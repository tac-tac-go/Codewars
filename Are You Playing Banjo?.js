function areYouPlayingBanjo(name) {
  return name.toLowerCase().slice(0,1)=="r" ? `${name} plays banjo` : `${name} does not play banjo`;
}
