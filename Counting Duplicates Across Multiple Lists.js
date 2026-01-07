const countDuplicates = (name, age, height) => name.length-new Set(name.map((_,i) => [name[i],age[i],height[i]].map(String).join(""))).size

