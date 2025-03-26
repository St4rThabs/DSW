function toUpperCase(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char >= "a" && char <= "z") {
      char = String.fromCharCode(char.charCodeAt(0) - 32);
    }

    result += char;
  }

  return result;
}

console.log(toUpperCase("hello world!"));
