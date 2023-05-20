def pass_the_door_man(word): 
    alpha = list("abcdefghijklmnopqrstuvwxyz")
    double = ''
    for i in range(len(word)-1):
        if word[i+1]==word[i]:
            double = word[i]
    return (alpha.index(double)+1)*3
    
