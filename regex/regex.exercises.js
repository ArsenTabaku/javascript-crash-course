function validateRegEx(stringToBeChecked, regexPattern) {
  if (regexPattern.test(stringToBeChecked)) {
    return true;
  } else {
    return false;
  }
}

// 1. Write a JavaScript program to test the first character of a string is uppercase or not.
console.log("1. Is first char uppercase? => ", validateRegEx("AbcD", /[A-Z]/));

// 2. Write a JavaScript program to check a credit card number.
console.log(
  "2. Is credit card valid? => ",
  validateRegEx("1596-1597-1544-1235", /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/)
);

// 3. Write a pattern that matches e-mail addresses.
console.log(
  "3. Is email address valid? => ",
  validateRegEx(
    "++-/hg|=?a%'{}r#!s$^_´en@gmail43.com.de",
    /^([\w!#\$%'\*\+-\/=\?\^\´{|}]+)@([a-z\d]{2,10})\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  )
);

// 4. Write a JavaScript program to search a date within a string.
console.log(
  "4. Is the date valid? => ",
  validateRegEx("12/25/2020", /^(1[0-2]|0?\d)\/(3[01]|2[0-9]|1[0-9])\/(\d){4}$/)
);

// 5. Write a JavaScript program that work as a trim function (string) using regular expression.
function trimString(stringToBeTrimmed) {
  return stringToBeTrimmed.replace(/^(\s*)|(\s*)$/gi, "");
}

console.log("5. Trimmed string is: => ", trimString("  TrimMe  "));

/* 6. Write a JavaScript program to count number of words in string. Note:
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing */
function countNumberOfWords(string) {
  if (string.length === 0) {
    return;
  }

  string = string.replace(/^(\s*)|(\s*)$/gi, "");
  string = string.replace(/[ ]{2,}/gi, " ");
  string = string.replace(/\n /, "\n");

  console.log(string);
  return string.split(" ").length;
}

console.log(
  "6. Number of words is: => ",
  countNumberOfWords("  number of  words  ")
);

// 7. Write a JavaScript function to check whether a given value is IP value or not.
console.log(
  "7. Is IP valid? => ",
  validateRegEx(
    "256.256.256.257",
    /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-6])$/
  )
);

// 8. Write a JavaScript function to count the number of vowels in a given string.
function numberOfVowels(string) {
  return string.match(/[aeoiu]/gi).length;
}

console.log("8. Number of vowels is: => ", numberOfVowels("Arsen Tabaku"));

// 9. Write a JavaScript function to check whether a given value is an valid url or not.
console.log(
  "9. Is URL valid? => ",
  validateRegEx(
    "http://virtualx.com.de.",
    /^http[s]?:\/\/(www)?(\w){2,}\.(\w){2,}(\.\w{2,})?$/
  )
);

// 10. Write a JavaScript function to check whether a given value is alpha numeric or not.
console.log(
  "10. Is string alpha numeric? => ",
  validateRegEx("arsen123", /^[a-zA-Z0-9]+$/)
);

// 11. Write a JavaScript function to check whether a given value is time string or not.
console.log(
  "11. Is string a time value? => ",
  validateRegEx(
    "2:59:59",
    /^(0?|0?[1-9]|1[0-9]|2[0-4]):(0?[0-9]|[0-5][0-9]):(0?[0-9]|[0-5][0-9])$/
  )
);

// 12. Write a JavaScript function to check whether a given value is US zip code or not.
console.log(
  "12. Is US postal code valid? => ",
  validateRegEx("12345-6789", /^(\d){5}(-\d{4})?$/)
);

// 13. Write a JavaScript function to check whether a given value is hexadecimal value or not.
console.log(
  "13. Is value hexadecimal? => ",
  validateRegEx("f321da", /^[a-fA-F0-9]{6}$/)
);

// 14. Write a JavaScript function to check whether a given value is html or not.
console.log(
  "14. Is value html? => ",
  validateRegEx("<tag/>", /<[a-z]+(\/)?>/)
);

// 15. Write a JavaScript function to check a given value contains dash and underscore.
function doesValueContainsAlphaDashAndUnderscore(string) {
  return string.match(/[-_]/gi);
}

console.log(
  "15. Does string contain dash value hexadecimal? => ",
  doesValueContainsAlphaDashAndUnderscore("f3-21_da")
);

// 16. Write a JavaScript function to convert a string to snake case.
function convertToSnakeCase(string) {
  return string.replace(/\W+/g, "_");
}

console.log(
  "16. String converted to snake case is: => ",
  convertToSnakeCase("legal notice")
);