table = {"0":"0","7":"1","8":"2","9":"3","4":"4","5":"5","6":"6","1":"7","2":"8","3":"9"}
def computer_to_phone(numbers):
    return "".join([table[i] for i in numbers])
