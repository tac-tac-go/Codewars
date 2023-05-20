# return the total byte size of the object. 
def total_bytes(object):
    from sys import getsizeof
    return getsizeof(object)
