def get_drink_by_profession(param):
    dic = {
        "jabroni":"Patron Tequila",
        "school counselor":"Anything with Alcohol",
        "programmer":"Hipster Craft Beer",
        "bike gang member":"Moonshine",
        "politician":"Your tax dollars",
        "rapper":"Cristal"
    }
    
    try:
        return dic[param.lower()]
    except:
        return "Beer"
