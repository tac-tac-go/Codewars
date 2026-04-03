import "dart:math";

int adjacentElementsProduct(array) => 
    List<int>.generate(array.length - 1,(int idx) => array[idx] * array[idx+1]).reduce(max);
