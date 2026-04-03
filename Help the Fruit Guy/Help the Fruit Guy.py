def remove_rotten(bag_of_fruits):
    if bag_of_fruits==None:return []
    return [i.replace("rotten","").lower() for i in bag_of_fruits]
