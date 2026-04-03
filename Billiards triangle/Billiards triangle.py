def pyramid(balls):
    result=1
    step=1
    for i in range(100000000):
        if result==balls:
            return i+1
        if result>balls:
            return i
        step+=1
        result+=step
        
