def split_and_merge(string_, separator):
    return " ".join(list(map(lambda x:f"{separator}".join(list(x)),string_.split(" "))))
