function getCommonDirectoryPath(paths) {
  let i = 0;
  while(paths.every(path => path[i] == paths[0][i]))i++;
  return paths[0].slice(0,i).replace(/[^\/]+$/,"")
}
