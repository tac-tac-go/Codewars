array = ['hello',
        'ciao',
        'salut',
        'hallo',
        'hola',
        'ahoj',
        'czesc']
def validate_hello(greetings):
    return len([1 for i in array if i in greetings.lower()])!=0


