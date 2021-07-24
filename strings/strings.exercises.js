// 1. Write a JavaScript function to check whether an `input` is a string or not.
function isString(valueToCheck) {
  if (typeof valueToCheck === "string" || valueToCheck instanceof String) {
    return true;
  } else {
    return false;
  }
}

console.log("Is value a string? => ", isString("123"));
// console.log("Is value a string? => ", isString(new String(123)));

// 2. Write a JavaScript function to check whether a string is blank or not.
function isStringBlank(stringToCheck) {
  if (stringToCheck === "") {
    return true;
  } else {
    return false;
  }
}

console.log("Is string blank? => ", isStringBlank(""));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function convertStringIntoAnArrayOfWords(stringToConvert) {
  return stringToConvert.split(" ");
}

console.log(convertStringIntoAnArrayOfWords("Apple Orange Mango Kiwi"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.
function extractSpecifiedNumberOfCharsFromAString(
  stringToExtract,
  numberOfCharsToExtract
) {
  return stringToExtract.slice(0, numberOfCharsToExtract);
}

console.log(
  "Extracted string => ",
  extractSpecifiedNumberOfCharsFromAString("Extract a number of chars", 5)
);

// 5. Write a JavaScript function to convert a string in abbreviated form.
function convertStringToAbbreviatedForm(stringToConvert) {
  const arrayOfStrings = stringToConvert.split(" ");

  let abbreviatedString = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    abbreviatedString += arrayOfStrings[i].charAt(0);
  }

  return abbreviatedString;
}

console.log(
  "Abbreviated form of given string is: ",
  convertStringToAbbreviatedForm("String to be converted into abbreviated form")
);
