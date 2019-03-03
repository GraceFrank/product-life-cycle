//using regEx to remove impunities from file
function clean(string) {
  //replace anything that is not new line or a word with a single space
  string = string.replace(/[^\w \n]/gi, " ");

  //replace one or more tab, horizontal tab or return carriage with single space
  string = string.replace(/[\t+\v+\r+]/, " ");

  //replace all one or more spacess with a single space
  string = string.replace(/ +/gi, " ");

  //replace all space folloed by  new line with a single new line
  string = string.replace(/ \n+/gi, "\n");

  //and finally replace all new lines that appear one or more times with one single new line
  string = string.replace(/\n+/gi, "\n");

  string = string.replace(/^\n/, "");
  return string;
}

module.exports = clean;
