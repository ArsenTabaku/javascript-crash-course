let stringToBeManipulated = '    My value will be manipulated below will ';

console.log(stringToBeManipulated.length);          // Returns the length of a String object.
console.log(stringToBeManipulated.charCodeAt(6));   // Returns the Unicode value of the character at the specified location.
console.log(stringToBeManipulated.substring(3,8));  // Returns the substring at the specified location within a String object.
console.log(stringToBeManipulated.replace('will be', 'is being'));  // Replaces text in  a string, using a search string.
console.log(stringToBeManipulated.replace(new RegExp('value', 'gi'), 'content'));   // Replaces text in  a string, using a RegEx.
console.log(stringToBeManipulated.charAt(1));       // Returns the character at the specified index.
console.log(stringToBeManipulated.concat('...the added', ' string'));   // Returns a string that contains the concatenation of two or more strings.
console.log(stringToBeManipulated.toLowerCase());   // Converts all the alphabetic characters in a string to lowercase.
console.log(stringToBeManipulated.toUpperCase());   // Converts all the alphabetic characters in a string to uppercase.
console.log(stringToBeManipulated.toLocaleLowerCase()); // Returns a string where all alphabetic characters have been converted to lowercase, taking into account the host environment's current locale.
console.log(stringToBeManipulated.toLocaleUpperCase()); // Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
console.log(stringToBeManipulated.trim());          // Removes the leading and trailing white space and line terminator characters from a string.
console.log(stringToBeManipulated.trimStart());     // Returns a copy with leading whitespace removed.
console.log(stringToBeManipulated.trimEnd());       // Returns a copy with trailing whitespace removed.
console.log(stringToBeManipulated.trimLeft());      // Removes whitespace from the left end of a string.
console.log(stringToBeManipulated.trimRight());     // Removes whitespace from the right end of a string.
console.log(stringToBeManipulated.split(' '));      // Split a string into substrings using the specified separator and return them as an array.
console.log(stringToBeManipulated.strike());        // Returns a <strike> HTML element.
console.log(stringToBeManipulated.bold());          // Returns a <b> HTML element.
console.log(stringToBeManipulated.anchor('link'));  // Returns an <a> HTML anchor element and sets the name attribute to the text value.
console.log(stringToBeManipulated.includes('will'));    // Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(stringToBeManipulated.indexOf('Will'));     // Returns the position of the first occurrence of a substring.
console.log(stringToBeManipulated.lastIndexOf('will')); // Returns the last occurrence of a substring in the string.
console.log(stringToBeManipulated.slice(5,12));         // Returns a section of a string.
