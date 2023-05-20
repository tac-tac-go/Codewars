def triple_trouble(one, two, three):
    return "".join([i+j+k for i,j,k in zip(one,two,three)])
