function balancedNum(number)
{
    let num = number.toString();
    if (num.length <= 2) {
      return "Balanced";
    } else {
      if (num.length % 2 === 1) {
        let leftSum = num.slice(0, Math.floor(num.length / 2)).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        let rightSum = num.slice(Math.floor(num.length / 2) + 1).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        return leftSum === rightSum ? "Balanced" : "Not Balanced";
      } else {
        let leftSum = num.slice(0, Math.floor(num.length / 2) - 1).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        let rightSum = num.slice(Math.floor(num.length / 2) + 1).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        return leftSum === rightSum ? "Balanced" : "Not Balanced";
      }
    }
}
