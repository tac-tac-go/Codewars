def get_villain_name(birthdate): 
    first = [ "The Evil","The Vile","The Cruel", "The Trashy","The Despicable", "The Embarrassing", "The Disreputable","The Atrocious", "The Twirling",  "The Orange","The Terrifying", "The Awkward"]
    last = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
    month = birthdate.month
    day = int(str(birthdate.day)[-1])
    if month==11 and day==18:
        return "The Terrifying Teaspoon"
    else:
        return f'{first[month-1]} {last[day]}'
