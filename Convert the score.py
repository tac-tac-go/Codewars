score = "nil one two three four five six seven eight nine".split(" ")
score_d = {score[i]:i for i in range(0,10)}
def scoreboard(st):
    st = st.split(" ")
    return [score_d[i] for i in st if i in score]
    
