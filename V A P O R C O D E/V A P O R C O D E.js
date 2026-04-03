const vaporcode = (string) => {
  return string.replace(/\s+/g,"").split("").map(v => v.toUpperCase()).join("  ")
}
