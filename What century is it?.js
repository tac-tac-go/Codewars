const whatCentury = (year) => {
  const result = String(Math.ceil((parseInt(year) / 1000) * 10) / 10 * 10);
  if (result[result.length - 2] === '1') {
    return result + "th";
  } else if (result[result.length - 1] === '1') {
      return result + "st";
  } else if (result[result.length - 1] === '2') {
      return result + "nd";
  } else if (result[result.length - 1] === '3') {
      return result + "rd";
  } else {
      return result + "th";
  }
}
