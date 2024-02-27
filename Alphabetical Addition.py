def add_letters(*letters):
    letters_c = list(letters)+["z"]
    alpha = "zabcdefghijklmnopqrstuvwxy";
    return alpha[(sum([alpha.index(i) for i in letters_c])%26)]
