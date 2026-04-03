function lastIndexOf(head, value) {
  let current = head;
  let index = 0;           
  let lastFoundIndex = -1;
  while(current !== null){
    if(current.data===value)lastFoundIndex = index
    current = current.next;
    index++;
  }
  return lastFoundIndex;
}
