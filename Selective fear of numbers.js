const AmIAfraid = function(day, num){
  return {
        'Monday':  num == 12,
        'Tuesday': num > 95,
        'Wednesday': num == 34,
        'Thursday': num == 0,
        'Friday': num % 2 == 0,
        'Saturday': num ==  56,
        'Sunday': num == 666 || num == -666,
    }[day]
}
