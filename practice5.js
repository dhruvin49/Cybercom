let str = "101023";

var restoreIpAddresses = function (s) {
  var ress = [];
  var len = s.length;
  var str1 = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  for (i = 1; i < 3; i++) {
    for (j = 1; j < 3; j++) {
      for (k = 1; k < 3; k++) {
        for (m = 1; m < 3; m++) {
          str1 = s.substr(0, i);
          str2 = s.substr(i, j);
          str3 = s.substr(i + j, k);
          str4 = s.substr(i + j + k, m);
          if (
            i + j + k + m === len &&
            isValid(str1) &&
            isValid(str2) &&
            isValid(str3) &&
            isValid(str4)
          ) {
            ress.push(str1 + "." + str2 + "." + str3 + "." + str4);
          }
        }
      }
    }
  }
  return ress;
};
var isValid = function (str) {
  if (str.length > 1 && str[0] === "0") return false;
  if (Number(str) > 255) return false;
  return true;
};



// Case2:

let nums = [-1,2,1,-4];
let target = 1;

let sum = nums.reduce((accum, curr) => { 
    return accum + curr;
}
)
