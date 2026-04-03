import re
def validate_usr(username):
    return bool(re.match(r'^[0-9a-z_]{4,16}$',username))
