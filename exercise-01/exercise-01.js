let arr = [5, 9, 6, 8, 4, 6];

function getSum(arr) {
  let totalAmount = 0;
  totalAmount = arr.reduce((total, currentElement) => {
    return total + currentElement;
  }, 0);
  return totalAmount;
}
console.log("getsum", getSum(arr));
