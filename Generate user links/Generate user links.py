def generate_link(user):
    import urllib.parse
    return "http://www.codewars.com/users/" + urllib.parse.quote(user)
