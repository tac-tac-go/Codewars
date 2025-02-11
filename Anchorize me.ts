export function anchorize(text:string){
  const pattern = /(https|http|ftp|ftps|file|smb):\/\/[^\s]+/gi;
  return text.replace(pattern,(match) => `<a href="${match}">${match}</a>`);
}
