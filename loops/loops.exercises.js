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
      pattern += (number++) + " ";
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

function displayPyramidWithRepeatedNumberPerRow(n) {
  let pattern = "";
  let number = 1;

  for (let i = 0; i < n; i++) {
    pattern = "";

    for (let k = 0; k < n-1-i; k++) {
      pattern += " ";
    }

    for (let j = 0; j < i+1; j++) {
      pattern += number + " ";
    }

    number++;
    console.log(pattern);
  }
}

console.log("\n7. Pyramid with repeated numbers per row: ");
displayPyramidWithRepeatedNumberPerRow(4);