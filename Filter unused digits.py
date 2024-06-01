def unused_digits(*numbers):
	return "".join([str(i) for i in range(0,10) if str(i) not in "".join(list(map(str,numbers)))])
