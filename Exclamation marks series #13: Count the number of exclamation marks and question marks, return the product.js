function product (string) {
  return (string.match(/!/g) || []).length*(string.match(/\?/g) || []).length
}
