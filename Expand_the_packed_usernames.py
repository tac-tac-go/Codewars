def expand_usernames(data):
    results = []
    for entry in data:
        id = entry[-1]
        names = entry[0].split(",")
        for name in names:
            if name.strip() != "":
                results.append([name.strip(), id])
    return results
