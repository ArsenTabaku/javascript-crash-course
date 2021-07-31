// 1. Write a JavaScript function to check whether an `input` is a string or not.
function isString(valueToCheck) {
  if (typeof valueToCheck === "string" || valueToCheck instanceof String) {
    return true;
  } else {
    return false;
  }
}

console.log("1. Is value a string? => ", isString("123"));
// console.log("1. Is value a string? => ", isString(new String(123)));

// 2. Write a JavaScript function to check whether a string is blank or not.
function isStringBlank(stringToCheck) {
  if (stringToCheck === "") {
    return true;
  } else {
    return false;
  }
}

console.log("2. Is string blank? => ", isStringBlank(""));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function convertStringIntoArray(stringToConvert) {
  return stringToConvert.trim().split(" ");
}

console.log("3", convertStringIntoArray("Apple Orange Mango Kiwi"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.
function extractSpecifiedNumberOfCharsFromAString(
  stringToExtract,
  numberOfCharsToExtract
) {
  return stringToExtract.slice(0, numberOfCharsToExtract);
}

console.log(
  "4. Extracted string => ",
  extractSpecifiedNumberOfCharsFromAString("Extract a number of chars", 5)
);

// 5. Write a JavaScript function to convert a string in abbreviated form.
function convertStringToAbbreviatedForm(stringToConvert) {
  const arrayOfStrings = stringToConvert.trim().split(" ");

  let abbreviatedString = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    abbreviatedString += arrayOfStrings[i].charAt(0);
  }

  return abbreviatedString;
}

console.log(
  "5. Abbreviated form of given string is: ",
  convertStringToAbbreviatedForm("Software Engineering")
);

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
function protectEmailAddress(emailAddress) {
  const splittedEmailAddress = emailAddress.split("@");
  const splittedEmailPartOneHalf = splittedEmailAddress[0].slice(
    0,
    splittedEmailAddress[0].length / 2
  );

  return splittedEmailPartOneHalf + "...@" + splittedEmailAddress[1];
}

console.log(
  "6. Protected email is: ",
  protectEmailAddress("arsentabaku@gmail.com")
);

// 7. Write a JavaScript function to parameterize a string.
function parameterizeString(stringToParameterize) {
  const arrayOfStrings = stringToParameterize.toLowerCase().split(" ");
  let parameterizedString = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (i === arrayOfStrings.length - 1) {
      parameterizedString += arrayOfStrings[i];
      continue;
    }

    parameterizedString += arrayOfStrings[i] + "-";
  }

  return parameterizedString;
}

console.log(
  "7. Parameterized string is: ",
  parameterizeString("Robin Singh from USA")
);

// 8. Write a JavaScript function to capitalize the first letter of a string.
function capitalizeFirstWordInAString(stringToCapitalize) {
  if (stringToCapitalize.length === 0) {
    return "ERROR - String to manipulate is undefined";
  }

  return (
    stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
  );
}

console.log(
  "8. Capitalized string is: ",
  capitalizeFirstWordInAString("js string exercises")
);

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalizeEveryWordInAString(stringToCapitalize) {
  const arrayOfStrings = stringToCapitalize.toLowerCase().split(" ");
  let capitalizedString = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    capitalizedString +=
      arrayOfStrings[i].charAt(0).toUpperCase() +
      arrayOfStrings[i].slice(1, arrayOfStrings[i].length) +
      " ";
  }

  return capitalizedString;
}

console.log(
  "9. Capitalized string is: ",
  capitalizeEveryWordInAString("js string exercises")
);

// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts
// upper case letters to lower case, and lower case letters to upper case.
function swapCaseForEachChar(stringToSwapCase) {
  let swappedString = "";

  // NOTE: Spaces are considered as lowercase
  for (let i = 0; i < stringToSwapCase.length; i++) {
    if (stringToSwapCase[i] === stringToSwapCase[i].toLowerCase()) {
      swappedString += stringToSwapCase[i].toUpperCase();
    } else if (stringToSwapCase[i] === stringToSwapCase[i].toUpperCase()) {
      swappedString += stringToSwapCase[i].toLowerCase();
    }
  }

  return swappedString;
}

console.log(
  "10. Swaped string is: ",
  swapCaseForEachChar("AaB bcCd dDeE EEF Fff")
);

// 11. Write a JavaScript function to convert a string into camel case.
function camelizeString(stringToCamelize) {
  return stringToCamelize.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}

console.log(
  "11. Camelized string is: ",
  camelizeString("best JavaScript exercises")
);

// 12. Write a JavaScript function to uncamelize a string.
function uncamelizeString(str, separator) {
  if (typeof separator == "undefined") {
    separator = " ";
  }

  return str.replace(/[A-Z]/g, function (char) {
    return separator + char.toLowerCase();
  });
}

console.log("12. Uncamelized string is: ", uncamelizeString("helloWoRld", "-"));
