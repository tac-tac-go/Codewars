from collections import Counter
def most_frequent_item_count(collection):
    result = [0]
    result += Counter(collection).values()
    result = sorted(result)[::-1]
    return result[0]
    
