import random
class Ghost(object):
    def __init__(self):
        rad = random.randint(0, 3)
        self.color = ["white","yellow","purple","red"][rad]
