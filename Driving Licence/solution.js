function driver(data) {
  const [first, middle, last, dob, gender] = data;
  const months = ['jan','feb','mar','apr','may','jun',
                  'jul','aug','sep','oct','nov','dec'];
  const [day, mon, year] = dob.split(/[-\s]+/);
  const monthNum = months.indexOf(mon.slice(0, 3).toLowerCase()) + 1;
  const month = String(gender.toUpperCase() === 'F' ? monthNum + 50 : monthNum)
    .padStart(2, '0');

  const surname = last.toUpperCase().padEnd(5, '9').slice(0, 5); 
  const decade  = year[2];                                       
  const dd      = day.padStart(2, '0');                          
  const unit    = year[3];                                       
  const initials = first[0] + (middle ? middle[0] : '9');        

  return (surname + decade + month + dd + unit + initials + '9AA').toUpperCase();
}
