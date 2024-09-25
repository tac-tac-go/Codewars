def histogram(results):
    result = []
    for i,v in enumerate(results):
        if v==0:
            result.append(f'{i+1}|{(v)*"#"}')
        else:
            result.append(f'{i+1}|{(v)*"#"} {v}')
    result = reversed(result)
    return "\n".join(result)+"\n"
