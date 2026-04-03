Math.degrees = function(radians) {
  const deg = radians * (180 / Math.PI);
  const formatted = parseFloat(deg.toFixed(2));
  return `${formatted}deg`;
};

Math.radians = function(degrees) {
  const rad = degrees * (Math.PI / 180);
  const formatted = parseFloat(rad.toFixed(2));
  return `${formatted}rad`;
};
