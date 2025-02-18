def make_password(phrase):
    return "".join([s[0].translate(str.maketrans('iIoOsS','110055')) for s in phrase.split(" ")])
