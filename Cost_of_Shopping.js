const shoppingList = function (items) {
  return items.map(v => v['price']).reduce((a,b) => a+b)
};

