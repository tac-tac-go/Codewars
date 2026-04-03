def sexy_name(name):
    SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
              'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
              'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
              'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}
    result = sum([SCORES[i] for i in name.upper() if i in SCORES])
    if result<=60:
        return 'NOT TOO SEXY'
    elif 61<=result<=300:
        return 'PRETTY SEXY'
    elif 301<=result<=599:
        return 'VERY SEXY'
    else:
        return 'THE ULTIMATE SEXIEST'

