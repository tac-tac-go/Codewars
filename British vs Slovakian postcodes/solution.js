function whichPostcode(postcode) {
  const p = postcode.trim();
  if (/^[a-z]{1,2}\d{1,2} \d[a-z]{2}$/i.test(p)) return "GB";
  if (/^\d{3} \d{2}$/.test(p)) return "SK";
  return "Not valid";
}