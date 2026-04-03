def tail_swap(strings):
    str1_a,str1_b = strings[0].split(":")
    str2_a,str2_b = strings[1].split(":")
    return [f"{str1_a}:{str2_b}",f"{str2_a}:{str1_b}"]
