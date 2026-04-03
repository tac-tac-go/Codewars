function getDate(timestamp, locale) {
  const date = new Date(timestamp * 1000);
  const format = formats[locale];

  const y = date.getFullYear();
  const m = date.getMonth() + 1; 
  const d = date.getDate();

  return format
    .replace('yyyy', y)
    .replace('yy', String(y).slice(-2)) 
    .replace('mm', String(m).padStart(2, '0'))
    .replace('m', m)
    .replace('dd', String(d).padStart(2, '0'))
    .replace('d', d);
}
