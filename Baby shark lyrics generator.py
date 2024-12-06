def baby_shark_lyrics():
    a = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"]
    result = ""
    for i in range(6):
        result += (f"{a[i]}, doo doo doo doo doo doo\n") * 3 + a[i] + "!\n"
    result += "Run away,…"
    return result
