var textToBeAddedToPar1 = "I will let you know about my age below: ";
document.getElementById('par1').innerHTML = textToBeAddedToPar1;

var age = prompt('What is your age?');
console.log('Age is: ', age);
document.getElementById('myAge').innerHTML = age;