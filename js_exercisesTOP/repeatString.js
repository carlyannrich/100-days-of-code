function repeatString(str, times) {
  let repeatedStr = "";
  for (i = 0; i < times; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
repeatString("Oh ", 3);

const repeatString = (str, times) => {
  let repeatedStr = "";
  for (i = 0; i < times; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};
repeatString("Oh ", 3);
