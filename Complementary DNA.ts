interface replace_pairstype {
  [key: string]: string
}

const pairs:replace_pairstype = {'A':'T','T':'A','C':'G','G':'C'};

export class Kata {
  static dnaStrand(dna: string) {
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }
}
