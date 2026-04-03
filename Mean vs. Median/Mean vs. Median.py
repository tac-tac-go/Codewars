def mean_vs_median(numbers):
    median = sorted(numbers)[len(numbers)//2]
    mean = sum(numbers)/len(numbers)
    if mean > median:
        return "mean"
    elif mean < median:
        return "median"
    else:
        return "same"
