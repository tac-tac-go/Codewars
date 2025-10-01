const getNote = (pitch) => Object.entries(notesDictionary).filter(([k,v]) => pitch >= Number(k) ? pitch%Number(k)===0 : Number(k)%pitch===0)[0][1]
