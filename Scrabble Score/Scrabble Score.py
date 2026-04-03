def scrabble_score(st): 
    return sum([dict_scores[i] for i in st.replace(" ","").upper()])
