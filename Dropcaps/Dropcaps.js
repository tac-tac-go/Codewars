function dropCap(s) {
  return s.replace(/\S{3,}/g, w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase());
}
