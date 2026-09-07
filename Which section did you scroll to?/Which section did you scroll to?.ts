export function getSectionId(scroll: number, sizes: number[]) {
  let start = 0;
  for (let i = 0; i < sizes.length; i++) {
    const end = start + sizes[i];
    if (scroll >= start && scroll < end) return i;
    start = end;
  }
  return -1;
}
