def match(candidate, job):
    try:
        a = candidate['min_salary']
        b = job['max_salary']
        return True if b >=(a*0.9) else False
    except:
        return 'should throw when a candidate has no min_salary'
