def my_languages(results):
    return list(dict(sorted({i:j for i,j in results.items() if j>=60}.items(),key=lambda x:-x[1])).keys())
