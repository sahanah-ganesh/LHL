function decodeMessage(message) {
  let arr = message.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr[i] = "o";
    }
    if (arr[i] == 1) {
      arr[i] = "i";
    }
    if (arr[i] == 2) {
      arr[i] = "u";
    }
    if (arr[i] == 3) {
      arr[i] = "e";
    }
    if (arr[i] == 4) {
      arr[i] = "a";
    }
    if (arr[i] == 5) {
      arr[i] = "y";
    }
  }
  console.log(arr);
  return arr.join("");
}

console.log(decodeMessage("th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."));