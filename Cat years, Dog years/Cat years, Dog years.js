var humanYearsCatYearsDogYears = function(hY) {
  return [hY,(hY==1) ? 15 : ((hY==2) ? 24 : ((hY-2)*4 + 24)),(hY==1) ? 15 : ((hY==2) ? 24 : ((hY-2)*5 + 24))];
}

