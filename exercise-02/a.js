let result = 1;
let result2 = 2;
let result3 = 3;

let api = new Function();

api(function (result) {
  console.log("result: ", result);
  api2(result2);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(result3);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});
api();
