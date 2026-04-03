def calculate_age(year_of_birth, current_year):
    if year_of_birth==current_year:
        return "You were born this very year!"
    elif year_of_birth>current_year:
        year =  "year" if year_of_birth-current_year==1 else "years"
        return "You will be born in {} {}.".format(year_of_birth-current_year,year)
    else:
        year =  "year" if current_year-year_of_birth==1 else "years"
        return "You are {} {} old.".format(current_year-year_of_birth,year)
