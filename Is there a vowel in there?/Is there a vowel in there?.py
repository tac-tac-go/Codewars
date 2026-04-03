def is_vow(inp):
    array = [ord('a'),ord('i'),ord('u'),ord('e'),ord('o')]
    return [chr(i) if i in array else i  for i in inp ]
