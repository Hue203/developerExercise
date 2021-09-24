// Define new promise, take a function , this func take 2 agr (resolve, reject) is func also ///
let api = new Promise(function (resolve, reject) {
  resolve(1);
});
/// result nhan dc tu tham so resolve//
//Promise co tinh chat chuoi, cai then trc return 2 thi then sau se nhan dc value do///
api
  .then(function (result) {
    console.log("result:", result);
    return 2;
  })
  .then(function (result2) {
    console.log("result2:", result2);
    return 3;
  })
  .then(function (result3) {
    console.log("result3:", result3);
  });
