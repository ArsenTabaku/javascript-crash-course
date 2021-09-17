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
function calculateSumOfSeries(x, n) {
  let sum = 1 + x;

  for (let i = 1; i < n; i++) {
    let denominator = 1;

    for (let j = i + 1; j > 0; j--) {
      denominator = denominator * j;
    }

    sum = sum + Math.pow(x, i + 1) / denominator;
  }

  console.log(sum);
}

console.log("\n11. Sum of series: ");
calculateSumOfSeries(3, 5);

// 12. Write a program to find the perfect numbers within a given number of range.
function perfectNumberWithinRange(minRange, maxRange) {
  let perfectNumbers = [];

  for (let j = minRange; j < maxRange; j++) {
    let sum = 0;

    for (let i = 1; i < j; i++) {
      if (j % i == 0) {
        sum += i;
      }
    }

    if (sum == j) {
      perfectNumbers.push(j);
    }
  }

  console.log(perfectNumbers);
}

console.log("\n12. Perfect numbers within given range are: ");
perfectNumberWithinRange(6, 66);

// 13. Write a program to find the Armstrong number for a given range of number.
function armstrongNumbersWithinRange(number) {
  let temp = number;
  let sum = 0;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }

  if (sum == number) {
    return true;
  } else {
    return false;
  }
}

console.log("\n13. Is number armstrong: ", armstrongNumbersWithinRange(153));

// 14. Write a program in C to display the pattern like a diamond.
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function drawDiamand(n) {
  drawDiamandUpperAndMiddle(n);
  drawDiamandBottom(n);
}

function drawDiamandUpperAndMiddle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    for (let k = 0; k < (i + 1) * 2 - 1; k++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

function drawDiamandBottom(n) {
  let pattern = "";

  for (let i = 0; i < n - 1; i++) {
    pattern = "";

    for (let j = 0; j < i + 1; j++) {
      pattern += " ";
    }

    for (let k = 0; k < (n - i - 1) * 2 - 1; k++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

console.log("\n14. Diamand drawn with starts is: ", drawDiamand(5));

// 15. Write a C program to display Pascal's triangle.
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1

function displayPascalsTriangle(n) {
  let pattern = "";
  let number;

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let k = 1; k <= n - i; k++) {
      pattern += "  ";
    }

    for (let j = 0; j <= i; j++) {
      if (j == 0 || i == 0) {
        number = 1;
      } else {
        number = (number * (i - j + 1)) / j;
      }

      pattern += "   " + number;
    }
    console.log(pattern);
  }
}

console.log("\n15. Pascal's triangle: ", displayPascalsTriangle(5));
