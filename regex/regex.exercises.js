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
  validateRegEx(
    "12/25/2020",
    /^(1[0-2]|0?\d)\/(3[01]|2[0-9]|1[0-9])\/(\d){4}$/
  )
);
