String anchorize(String text){
  final pattern = RegExp(r'(http|https|ftp|ftps|file|smb):\/\/[^\s]+',caseSensitive:false);
  return text.replaceAllMapped(pattern,(match){
    final url = match.group(0);
    return '<a href="$url">$url</a>';
  });
}

