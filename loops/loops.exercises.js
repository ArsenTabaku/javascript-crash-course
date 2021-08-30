// 1. Write a program to display the sum of n first natural numbers.
function displaySumOfNaturalNumbers(n) {
  let sumOfNaturalNumbers = 0;
  for (let i = 0; i < n; i++) {
    sumOfNaturalNumbers += i;
  }

  return sumOfNaturalNumbers;
}

console.log(
  "1. Sum of first N natural numbers is: ",
  displaySumOfNaturalNumbers(5)
);

// 2. Write a program to display the pattern like right angle triangle using an asterisk.
// *
// **
// ***
// ****

function displayRightAngleTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

console.log("\n2. Right angle triangle: ");
displayRightAngleTriangle(5);

// 3. Write a program to display the pattern like right angle triangle with a number.
// 1
// 12
// 123
// 1234

function displayRightAngleTriangleWithNumbers(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      pattern += j + 1;
    }

    console.log(pattern);
  }
}

console.log("\n3. Right angle triangle with number: ");
displayRightAngleTriangleWithNumbers(5);

// 4. Write a program to make such a pattern like right angle triangle with a number
// which will repeat a number in a row.
// 1
// 22
// 333
// 4444

function displayRightAngleTriangleWithRepeatedNumbers(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      pattern += i + 1;
    }

    console.log(pattern);
  }
}

console.log("\n4. Right angle triangle with repeated numbers: ");
displayRightAngleTriangleWithRepeatedNumbers(5);

// 5. Write a program to make such a pattern like right angle triangle with number increased by 1.
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function displayRightAngleTriangleWithIncreasedNumbersByOne(n) {
  let pattern = "";
  let k = 1;

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      pattern += k++;
    }

    console.log(pattern);
  }
}

console.log("\n5. Right angle triangle with increased numbers by one: ");
displayRightAngleTriangleWithIncreasedNumbersByOne(4);

// 6. Write a program  to make such a pattern like a pyramid with numbers increased by 1.
//    1
//   2 3
//  4 5 6
// 7 8 9 10

function displayPyramidWithIncreasedNumbersByOne(n) {
  let pattern = "";
  let number = 1;

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < n - 1 - i; j++) {
      pattern += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      pattern += number++ + " ";
    }

    console.log(pattern);
  }
}

console.log("\n6. Pyramid with increased numbers by one: ");
displayPyramidWithIncreasedNumbersByOne(4);

// 7. Write a program to make such a pattern like a pyramid with a number which will
// repeat the number in the same row.
//    1
//   2 2
//  3 3 3
// 4 4 4 4

function displayPyramidWithRepeatedNumberPerRow(n) {
  let pattern = "";
  let number = 1;

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let k = 0; k < n - 1 - i; k++) {
      pattern += " ";
    }

    for (let j = 0; j < i + 1; j++) {
      pattern += number + " ";
    }

    number++;
    console.log(pattern);
  }
}

console.log("\n7. Pyramid with repeated numbers per row: ");
displayPyramidWithRepeatedNumberPerRow(4);

// 8. Write a program to display the pattern like a pyramid using asterisk and each
// row contain an odd number of asterisks.
//    *
//   ***
//  *****
// *******

function displayPyramidWithOddAsterisks(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < n - 1 - i; j++) {
      pattern += " ";
    }

    for (let k = 0; k < i * 2 + 1; k++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

console.log("\n8. Pyramid with odd asterisks: ");
displayPyramidWithOddAsterisks(4);

// 9. Write a program to display the sum of the series [ 9 + 99 + 999 + 9999 ...].

function displayNumberOfSeries(n) {
  let sum = 9;
  let pattern = 9;

  for (let i = 0; i < n - 1; i++) {
    pattern = pattern * 10 + 9;
    sum += pattern;
  }

  console.log(sum);
}

console.log("\n9. Sum of series: ");
displayNumberOfSeries(5);

// 10. Write a program to print the Floyd's Triangle.
function floydTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          pattern += "1";
        } else {
          pattern += "0";
        }
      } else if (i % 2 == 1) {
        if (j % 2 == 0) {
          pattern += "0";
        } else {
          pattern += "1";
        }
      }
    }

    console.log(pattern);
  }
}

console.log("\n10. Floyd's Triangle: ");
floydTriangle(5);

// 11. Write a program to display the sum of the series [ 1+x+x^2/2!+x^3/3!+....].

// 12. Write a program to find the sum of the series [ x - x^3 + x^5 + ......].

// 13. Write a program to display the n terms of square natural number and their sum.
// 1 4 9 16 ... n

// 14. Write a program to check whether a given number is a perfect number or not.

// 15. Write a program to find the perfect numbers within a given number of range.

// 16. Write a program to check whether a given number is an armstrong number or not.

// 17. Write a program to find the Armstrong number for a given range of number.
