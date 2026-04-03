String well(List<String> x) {
  var condition = x.where((c) => c=='good').length;
  return condition>2 ? "I smell a series!" : condition==1 || condition==2 ? 'Publish!' : 'Fail!';
}
