def vowel_indices(word):
	return [i+1 for i,j in enumerate(word) if j.lower() in "aiueoy"]
