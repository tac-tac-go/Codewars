def _not(func):
    def not_func(*args, **kwargs):
        return not func(*args, **kwargs)
    return not_func

def partition(arr, classifier_method):
    return (list(filter(classifier_method,arr)),list(filter(_not(classifier_method),arr)))
