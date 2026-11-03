function dashatize(num) {
  return String(Math.abs(num))
    .replace(/[13579]/g, "-$&-")
    .replace(/--/g, "-")
    .replace(/^-|-$/g, "");
}
