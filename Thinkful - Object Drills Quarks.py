class Quark(object):
    def __init__(self,_color,_flavor):
        self.color = _color;
        self.flavor = _flavor;
        self.baryon_number = 1/3
    def interact(self,other):
        self.color,other.color = other.color,self.color
