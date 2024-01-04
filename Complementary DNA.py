table = {
    "A":"T",
    "T":"A",
    "G":"C",
    "C":"G"
}

def DNA_strand(dna):
    return "".join(list(map(lambda x:table[x],list(dna))))
