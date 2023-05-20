from datetime import datetime

def is_today(date): 
    return datetime.today().strftime('%Y-%m-%d')==date.strftime('%Y-%m-%d')
