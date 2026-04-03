const jeringonza = (str) => str.replace(/[aiueo]/ig,(match) => match.toUpperCase()===match ? match+"P"+match :  match+"p"+match)
