const isInformationConsistent = (evidences) => evidences[0].map((_,i) => evidences.map(v => v[i])).filter(tmp => tmp.indexOf(1)!==-1 && tmp.indexOf(-1)!==-1).length===0
