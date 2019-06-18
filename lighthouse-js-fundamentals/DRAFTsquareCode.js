const squareCode = function(message) {
  let messageArr = message.split(" ");
  let msg = messageArr.join("");
  let length = msg.length;
  let square = Math.ceil(Math.sqrt(length));
  let msgArr = [];
  let final = "";
  for (var i = 0; i < length; i += square) {
    msgArr.push(msg.substring(i, i + square));
    final = msgArr.join("\r\n");
  }
  console.log(final);
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));



