def part(arr):
    gvn_a = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"]
    result = sum([1 for i in arr if i in gvn_a])
    return "Mine's a Pint"+"!"*result if result>0 else "Lynn, I've pierced my foot on a spike!!"
    
