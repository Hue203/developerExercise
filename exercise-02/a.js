let result = 1;
let result2 = 2;
let result3 = 3;

function api(result) {
  console.log("result: ", result);
  api2(result2);
  function api2(result2) {
    console.log("result2: ", result2);
    api3(result3);
    function api3(result3) {
      console.log("result3: ", result3);
    }
  }
}

api(result);
