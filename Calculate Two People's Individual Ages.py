def get_ages(sum_, difference):
    if sum_ < 0 or difference<0:
        return None
    for i in range((sum_+1)*10):
        for j in range((sum_+1)*10):
            if (i+j)==sum_*10 and abs(i-j)==difference*10:
                return (max(i,j)/10,min(i,j)/10)
    return None
