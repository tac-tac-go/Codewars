def generate_shape(n):
    result = []
    for i in range(n):
        result.append("+"*n)
    return "\n".join(result)
        
