def get_number_from_string(string):
    return int("".join(list(filter(lambda x:x.isdigit(),list(string)))))
