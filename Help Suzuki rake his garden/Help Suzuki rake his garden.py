def rake_garden(garden):
    return " ".join([s if s=='gravel' or s=='rock' else "gravel" for s in garden.split(" ")])
