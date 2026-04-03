def twos_difference(input): 
    input_s = sorted(input)
    result = []
    for i in range(len(input_s) - 1):
        for j in range(i + 1, len(input_s)):
            if input_s[j] - input_s[i] == 2:
                result.append((input_s[i], input_s[j]))
    return result
