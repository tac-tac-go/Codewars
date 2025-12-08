explode(List arr){
  if(arr[0] is int && arr[1] is int){
    return List.generate(arr[0]+arr[1],(_) => List.from(arr));
  }else if(arr[0] is int && arr[1] is String){
    return List.generate(arr[0],(_) => List.from(arr));
  }else if(arr[0] is String && arr[1] is int){
    return List.generate(arr[1],(_) => List.from(arr));
  }else{
    return  'Void!';
  }
}
