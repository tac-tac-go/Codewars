function detectOperator(a){
  if (/^8039\d{7}$/.test(a)) return "Golden Telecom";
  else if (/^8050\d{7}$/.test(a)) return "MTS";
  else if (/^8063\d{7}$/.test(a)) return "Life:)";
  else if (/^8066\d{7}$/.test(a)) return "MTS";
  else if (/^8067\d{7}$/.test(a)) return "Kyivstar";
  else if (/^8068\d{7}$/.test(a)) return "Beeline";
  else if (/^8093\d{7}$/.test(a)) return "Life:)";
  else if (/^8095\d{7}$/.test(a)) return "MTS";
  else if (/^8096\d{7}$/.test(a)) return "Kyivstar";
  else if (/^8097\d{7}$/.test(a)) return "Kyivstar";
  else if (/^8098\d{7}$/.test(a)) return "Kyivstar";
  else if (/^8099\d{7}$/.test(a)) return "MTS";
  else return 'no info'
}
