const urlEncode = function(text) {
  var input = text.trim();
  var string = "";
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == " ") {
      string += "%20";
    } else {
      string += input.charAt(i);
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

const urlEncode = function(text) {
  var string = "";
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) == " ") {
      string += "%20";
    } else {
      string += text.charAt(i);
    }
  }
  return string;
};