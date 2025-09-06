const makesTheSentence = (characterArray, sentenceString)=>characterArray.sort().join("")===[...sentenceString.replaceAll(" ","")].sort().join("")
