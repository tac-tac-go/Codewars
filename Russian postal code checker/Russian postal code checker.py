import re
def zipvalidate(postcode):
    return bool(re.fullmatch("[12346][0-9]{5}", postcode))
