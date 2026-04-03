from collections import defaultdict

def who_is_online(friends):
    d = defaultdict(list)
    for user in friends:
        status = 'away' if user['status'] == 'online' and user['last_activity'] > 10 else user['status']
        d[status].append( user['username'] )
    return d
