table = str.maketrans({
    'A':'@',
    'I':'*',
    'U':'*',
    'E':'*',
    'O':'*',
})
def gordon(a):
    arr = a.upper().translate(table).split(" ")
    return " ".join([i+"!!!!" for i in arr])
