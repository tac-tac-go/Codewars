def word_search(query, seq):
    result = [v for v in seq if query.lower() in v.lower()]
    return ['None'] if len(result)==0 else result
