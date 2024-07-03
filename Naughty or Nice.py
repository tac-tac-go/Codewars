def get_nice_names(people):
    return [obj['name'] for obj in people if obj["was_nice"]]

def get_naughty_names(people):
    return [obj['name'] for obj in people if not(obj["was_nice"])]
