def camel_case(s):
    return "".join([tmp.title() for tmp in s.split(" ")])
