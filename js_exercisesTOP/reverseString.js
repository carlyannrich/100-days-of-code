const reverseString = (str) => {
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
};

reverseString("hola");
