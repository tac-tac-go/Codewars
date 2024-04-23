class Calculator:
    @staticmethod
    def average(*args):
        return sum(args)/len(args)  if len(args)!=0 else 0
