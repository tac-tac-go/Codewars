def period_is_late(last,today,cycle_length):
    return True if  (today-last).days > cycle_length else False
