def find_employees_role(name):
    for dic in employees:
        if dic['first_name']+" "+dic['last_name']==name:
            return dic['role']
    return 'Does not work here!'
