// 1. Write a JavaScript function to check whether an `input` is an array or not.
function isArray(valueToCheck) {
  if (typeof valueToCheck === "array" || valueToCheck instanceof Array) {
    return true;
  } else {
    return false;
  }
}

console.log("1. Is value an array? => ", isArray(new Array(3, 4, 5)));

// 2. Write a JavaScript function to clone an array.
function cloneArray(array) {
  let clonedArray = [];

  array.forEach((element) => {
    clonedArray.push(element);
  });

  return clonedArray;
}

console.log("2. Cloned array is: => ", cloneArray(new Array(3, 4, 5)));

// 3. Write a JavaScript function to get the first N element of an array.
function getNFirstElements(array, n) {
  let i = 1;

  array.forEach((element) => {
    if (i < n) {
      array.pop();
      i++;
    }
  });

  return array;
}

console.log(
  "3. First N elements of the array are: => ",
  getNFirstElements(new Array(3, 4, 5), 2)
);

// 4. Write a JavaScript function to get the last N element of an array.
function getNLastElements(array, n) {
  let i = 1;

  array = array.reverse();
  array.forEach((element) => {
    if (i < n) {
      array.pop();
      i++;
    }
  });

  return array.reverse();
}

console.log(
  "4. Last N elements of the array are: => ",
  getNLastElements(new Array(3, 4, 5), 2)
);

// 5. Write a JavaScript program to sort the items of an array.
function sortArrayInDescendingOrder(array) {
  return array.sort().reverse();
}

console.log(
  "5. Sort in descending order: => ",
  sortArrayInDescendingOrder(new Array(3, 9, 5, 7))
);

// 6. Write a JavaScript program to find the most frequent item of an array.
function findMostFrequentItemOnArray(array) {
  let numberOfOccurences = 0;
  let max = numberOfOccurences;
  let elementWithMostOccurrences;

  array.forEach((el1) => {
    numberOfOccurences = 0;

    array.forEach((el2) => {
      if (el1 === el2) {
        numberOfOccurences++;
      }
    });

    if (numberOfOccurences > max) {
      max = numberOfOccurences;
      elementWithMostOccurrences = el1;
    }
  });

  return elementWithMostOccurrences;
}

console.log(
  "6. Element with most occurrences is: ",
  findMostFrequentItemOnArray(new Array(3, 9, 3, 5, 7))
);

// 7. Write a JavaScript program which finds the average of each row for the matrix below.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function findAveragePerRow() {
  const matrix = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  let avg = 1,
    sum;

  for (let i = 0; i < matrix.length; i++) {
    sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }

    avg = sum / matrix[i].length;
    console.log("Row: ", i + 1, " - Average: ", avg);
  }
}

console.log("7. Average per row is: ", findAveragePerRow());

// 8. Write a JavaScript program to remove duplicate items from an array.
function removeDublicatedItems(array) {
  let nonDublicatedArray = [];
  let isUnique = false;

  for (let i = 0; i < array.length; i++) {
    isUnique = false;

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        isUnique = true;
      }
    }

    if (!isUnique) {
      nonDublicatedArray.push(array[i]);
    }
  }

  return nonDublicatedArray;
}

console.log(
  "8. Nondublicated array is: ",
  removeDublicatedItems(new Array(3, 5, 3, 6, 1))
);

// 9. Write a JavaScript program to find the leap years in a given range of years.
function findLeapYears(minRange, maxRange) {
  let leapYears = [];

  for (let i = minRange; i < maxRange; i++) {
    if (isLeapYear(i)) {
      leapYears.push(i);
    }
  }

  return leapYears;
}

function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log("9. Leap years within the range are: ", findLeapYears(2000, 2021));

// 10.Write a JavaScript program to perform a binary search.
function binarySearch(array, element, start, end) {
  if (start > end) {
    return false;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === element) {
    return true;
  }

  if (array[mid] > element) {
    return binarySearch(array, element, start, mid - 1);
  } else {
    return binarySearch(array, element, mid + 1, end);
  }
}

console.log(
  "10. Binary search result are: ",
  binarySearch(new Array(3, 5, 7, 1, 8), 3, 0, 5)
);
