function racePodium(blocks) {
  const t1 = Math.ceil((blocks+3)/3)
  const t2 = Math.min(t1-1,blocks-t1-1)
  const t3 = blocks-t1-t2
  return [t2,t1,t3]
}

