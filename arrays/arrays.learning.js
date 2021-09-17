let fruits = ["apple", "orange", "mango"];
let cars = ["mercedes", "audi", "bmw", "opel"];
let numbers = [7, 5, 2, 9];

// 1. concat - Returns a new array comprised of this array joined with other array(s) and/or value(s).
console.log("1. ", fruits.concat(cars));

// 2. every - Returns true if all elements in the array pass the test implemented by the provided function.
console.log("2. ", fruits.every((currentFruit) => currentFruit === "mango"));

// 3. some - Returns true if at least one element in this array satisfies the provided testing function.
console.log("3. ", fruits.some((currentFruit) => currentFruit === "mango"));

// 4. filter - Returns a new array with all elements that pass the test implemented by the provided function.
console.log("4. ", cars.filter((car) => car.length < 5));

// 5. forEach - Executes a provided function once for each array element.
let upperCaseCarsArray = [];

cars.forEach((car) => {
  upperCaseCarsArray.push(car.toUpperCase());
});

console.log("5. ", upperCaseCarsArray);

// 6. indexOf - Returns the first index of an element within the array equal to the specified value, or -1 if none is found.
console.log("6. ", fruits.indexOf("mango"));

// 7. lastIndexOf - Returns the last index of an element within the array equal to the specified value, or -1 if none is found.
console.log("7. ", fruits.lastIndexOf("mango"));

// 8. join - Joins all elements of an array into a string.
console.log('8. ', fruits.join("-"));

// 9. map - Creates a new array with the results of calling a provided function on every element in this array.
console.log('9. ', cars.map((car) => car.charAt(0).toUpperCase() + car.slice(1,)));

// 10. pop - Removes the last element from an array and returns that element.
console.log('10. ', cars.pop());

// 11. push - Adds one or more elements to the end of an array and returns the new length of the array.
console.log('11. ', cars.push('Porsche'));

// 12. reduce - Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
console.log('12. ', cars.reduce((car1, car2) => car1 + car2 + '-'));

// 13. reduceRight - Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
console.log('13. ', cars.reduceRight((car1, car2) => car1 + car2 + '-'));

// 14. reverse - Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
console.log('14. ', cars.reverse());

// 15. shift - Removes the first element from an array and returns that element.
console.log('15. ', cars.shift());

// 16. unshift - Adds one or more elements to the front of an array and returns the new length of the array.
console.log('16. ', cars.unshift('opel'));

// 17. slice - Extracts a section of an array and returns a new array.
console.log('17. ', cars.slice(1, 3));

// 18. sort - Sorts the elements of an array in ascending order by default.
console.log('18.1 ', numbers.sort());
console.log('18.2 ', fruits.sort());

// 19. slice - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
console.log('19. ', cars.splice(0, 0, 'volswagen'));

// 20. toString - Returns a string representing the specified array and its elements.
console.log('20. ', cars.toString());
