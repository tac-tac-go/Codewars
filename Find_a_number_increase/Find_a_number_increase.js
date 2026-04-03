function increaseNumber(initialValue, finalValue) {
  return ((typeof initialValue === "number") && (typeof finalValue === "number")) && initialValue < finalValue ? finalValue-initialValue : null;
}
