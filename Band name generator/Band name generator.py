def band_name_generator(name):
    return (name[:-1]+name).title() if name[0].lower()==name[-1].lower() else "The "+name.title()
