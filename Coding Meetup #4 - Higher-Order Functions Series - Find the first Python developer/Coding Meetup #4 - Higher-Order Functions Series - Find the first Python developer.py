def get_first_python(users):
    text = "There will be no Python developers"
    for user in users:
        if user['language']=="Python":
            text = user['first_name'] + ", " + user['country']
            break
    return text
            
