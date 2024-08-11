from collections import Counter
def odd_ones_out(numbers):
    freq = Counter(numbers)
    result = []
    for number in numbers:
        if freq[number]%2==0:
            result.append(number)
    return result
