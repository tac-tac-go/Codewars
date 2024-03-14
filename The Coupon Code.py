import datetime
def check_coupon(entered_code, correct_code, current_date, expiration_date):
    d1 = datetime.datetime.strptime(current_date, "%B %d, %Y")
    d2 = datetime.datetime.strptime(expiration_date, "%B %d, %Y")
    return entered_code==correct_code and type(entered_code)==type(correct_code) and d1<=d2
