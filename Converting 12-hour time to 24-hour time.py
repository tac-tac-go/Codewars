def to24hourtime(hour, minute, period):
    hour = (hour%12) if period=='am' else (hour%12)+12
    return str(hour).zfill(2)+str(minute).zfill(2)

