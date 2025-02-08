def get_new_notes(salary,bills):
    arr_s = sum(bills)
    return 0 if salary - arr_s < 0 else (salary - arr_s)//5
