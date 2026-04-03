const anchorize = (text) => {
  const pattern = /(http|https|ftp|ftps|file|smb):\/\/[^\s]+/gi;
  return text.replace(pattern, (match) => `<a href="${match}">${match}</a>`);
}
