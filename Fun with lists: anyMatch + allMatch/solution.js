function anyMatch(head, p) {
  let node = head;
  while (node !== null) {
    if (p(node.data)) return true;
    node = node.next;
  }
  return false;
}

function allMatch(head, p) {
  let node = head;
  while (node !== null) {
    if (!p(node.data)) return false;
    node = node.next;
  }
  return true;
}


