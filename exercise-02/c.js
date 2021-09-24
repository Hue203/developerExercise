let result = 1;
let result2 = 2;
let result3 = 3;
///async makes a function return a Promise//
async function myFunc() {
  return (
    console.log("result: ", result),
    console.log("result2: ", result2),
    console.log("result3: ", result3)
  );
}
myFunc();
