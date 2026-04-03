const umbrella = w => w.filter((x,i) => (x=="rainy" || x=="thunderstorm") 
                                    && (i%3==0 || (w[i-1]!="rainy" && w[i-1]!="thunderstorm"))).length;
