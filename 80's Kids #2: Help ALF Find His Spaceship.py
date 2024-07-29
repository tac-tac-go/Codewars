def find_spaceship(astromap):
    rows = astromap.split("\n")
    p_i =[i for i,lst in enumerate(rows) if "X" in lst]
    if len(p_i)==0:
        return "Spaceship lost forever."
    return [rows[p_i[0]].index("X"),len(rows)-1-p_i[0]]
