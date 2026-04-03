def determine_time(durations):
    total = 0
    for duration in durations:
        h, m, s = map(int, duration.split(":"))
        total += (h * 3600) + (m * 60) + s
    allowed_time = 24 * 60 * 60
    return total <= allowed_time
