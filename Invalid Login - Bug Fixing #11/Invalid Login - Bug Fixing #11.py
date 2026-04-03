database = Database()

def validate(username, password):
    return database.login(username,password)
