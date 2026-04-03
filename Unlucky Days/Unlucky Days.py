import datetime as dt
import calendar
def unlucky_days(year):
    count = 0
    for month in range(1, 13):
        date = dt.date(year, month, 13)
        youbi = calendar.day_abbr[date.weekday()]
        if youbi=="Fri":
            count+=1
    return count
