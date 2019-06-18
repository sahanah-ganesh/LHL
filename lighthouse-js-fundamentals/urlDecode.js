const urlDecode = function(text) {
  let textArr = text.split("&");
  let textObj = {};
  textArr.forEach(function(e) {
    let param = e.split("=");
    textObj[param[0]] = decodeURIComponent(param[1]);
  });
  return textObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);