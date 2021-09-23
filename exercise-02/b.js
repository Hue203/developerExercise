let result = 1;
let result2 = 2;
let result3 = 3;

function api(result) {
  console.log("result: ", result);
  return api2()
    .then(function api2(result2) {
      console.log("result2: ", result2);
      return api3();
    })
    .then(function api3(result3) {
      console.log("result3: ", result3);
    })
    .catch(function (error) {
      console.log("error: ", error);
    });
}

api(result);
