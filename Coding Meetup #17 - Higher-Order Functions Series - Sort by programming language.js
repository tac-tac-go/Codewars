const sortByLanguage = (list) => list.sort((a,b) => a.language.localeCompare(b.language) || a.firstName.localeCompare(b.firstName))
