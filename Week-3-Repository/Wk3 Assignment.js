// //Question 1a

// const ages = [3, 9, 23, 64, 2, 8, 28, 93]

// let num1 = ages.shift();
// let num2 = ages.pop();

// console.log(num1)
// console.log(num2)
// console.log(num2 - num1); 

// //Question 1b

// const ages = [3, 9, 23, 64, 2, 8, 28, 93]

// console.log(ages.toString(', ')); 

// ages.unshift(5);
// ages.push(20);

// console.log(ages.toString(', ')); 

// let num1 = ages.shift();
// let num2 = ages.pop();

// console.log(num1)
// console.log(num2)
// console.log(num2 - num1); 

// //Question 1c

// const ages = [3, 9, 23, 64, 2, 8, 28, 93]

// var sum = 0;
// for (var i = 0; i < ages.length; i++) {
//         sum += ages[i];
// }

// var avg = sum / ages.length;

// console.log(ages.toString());

// console.log("The average of the array is " + avg);

//Qestions 2, 5, 6
//Question 2
// const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// var charNumber = 0

// for (var i = 0; i < names.length; i++) {
//     var charNumber = charNumber + names[i].length;
// }

// var answer = charNumber / names.length;

// console.log(answer);


//Question 2b

//var concat = " ";

// for (var i = 0; i < names.length; i++) {
//         var concat = concat + names[i] + (" ");
// }

// console.log(concat);

//Question 5

// const namesLength = [];

// for (var i = 0; i < names.length; i++) {
//     namesLength.push(names[i].length);
// }

// console.log(namesLength);

// //Question 6

// var namesLengthTotal = 0;

// for (var i = 0; i < names.length; i++) {
//     var namesLengthTotal = namesLengthTotal + names[i].length;
// }

// console.log(namesLengthTotal);

//Question 7

// function questionSeven(word, n) {

// var word = prompt('Enter a word:');
// var n = prompt('How many times shall we concat your word?');
// var result = ' ';

//    for (var i = 1; i <= n; i++) {
//         var result = (result + word);        
//    } alert(result);
// }

// questionSeven();

//Question 8

// function fullName(firstName, lastName) {

//     var firstName = prompt('Enter your first name:');
//     var lastName = prompt('Enter your last name:');
        
//       alert('Your name is ' + firstName + " " + lastName)
    
// }
//     fullName();

//Question 9
//I couldn't get the loop to display the prompt like I wanted.
//I'm sure I'll figure it out later but for now, this will work.
// //The prompt allows the user to enter what ever numbers we want into
// //the array for a more flexible test run.

// const hundredArray = [];
// const numbers = [];

// function overHundred() {

// var userNumber = prompt('Please enter a number (1 of 5):');
//         hundredArray.push(userNumber);
// var userNumber = prompt('Please enter a number (2 of 5):');
//         hundredArray.push(userNumber);
// var userNumber = prompt('Please enter a number (3 of 5):');
//         hundredArray.push(userNumber);
// var userNumber = prompt('Please enter a number (4 of 5):');
//         hundredArray.push(userNumber);
// var userNumber = prompt('Please enter a number (5 of 5):');
//         hundredArray.push(userNumber);

  
// var length = hundredArray.length;
  
//     for (var i = 0; i < length; i++) {
//         numbers.push(parseInt(hundredArray[i]));
//     }

// var sum = 0;

// for(var i = 0; i < numbers.length; i++) {
//     var sum = (sum + numbers[i]);
//     }

//     if (sum > 100) { 
//         alert(hundredArray.join(' + ') + ' is ' + sum + ' and is greater than 100');
//     }

//     alert(hundredArray.join(' + ') + ' is ' + sum + ' and is not greater than 100');
  
//     }
   
// overHundred();

//Question 10

// const avgNumbers = [];
// const numbers = [];

// function inputFirstArray() {

// var userNumber = prompt('Please enter a number (1 of 5):');
//     avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (2 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (3 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (4 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (5 of 5):');
//    avgNumbers.push(userNumber);

// }

// function getAverage() {

// var length = avgNumbers.length;
  
//     for (var i = 0; i < length; i++) {
//         numbers.push(parseInt(avgNumbers[i]));
//     }

// var sum = 0;

// for(var i = 0; i < numbers.length; i++) {
//     var sum = (sum + numbers[i]);
//     }
// let average = sum / numbers.length

// alert('The average of ' + avgNumbers.join(' , ') + ' is ' + average)

//}
// inputFirstArray();
// getAverage();

//Question 11

// const avgNumbers = [];
// const avgNumbersTwo = [];
// const numbers = [];
// const numbersTwo = [];
// const finalAverages = [];

// function inputFirstArray() {

// var userNumber = prompt('Please enter a number (1 of 5):');
//     avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (2 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (3 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (4 of 5):');
//    avgNumbers.push(userNumber);
// var userNumber = prompt('Please enter a number (5 of 5):');
//    avgNumbers.push(userNumber);

// }

// function inputSecondArray() {

// var userNumber = prompt('Please enter a number (1 of 5):');
//     avgNumbersTwo.push(userNumber);
// var userNumber = prompt('Please enter a number (2 of 5):');
//     avgNumbersTwo.push(userNumber);
// var userNumber = prompt('Please enter a number (3 of 5):');
//     avgNumbersTwo.push(userNumber);
// var userNumber = prompt('Please enter a number (4 of 5):');
//     avgNumbersTwo.push(userNumber);
// var userNumber = prompt('Please enter a number (5 of 5):');
//     avgNumbersTwo.push(userNumber);

// }

// function getAverage() {

// var length = avgNumbers.length;
  
//     for (var i = 0; i < length; i++) {
//         numbers.push(parseInt(avgNumbers[i]));
//     }

// var sum = 0;

// for(var i = 0; i < numbers.length; i++) {
//     var sum = (sum + numbers[i]);
//     }
//  var avgOne = sum / numbers.length;
//  finalAverages.push(avgOne);
// }

// function getSecondAverage() {

//     var length = avgNumbersTwo.length;
      
//         for (var i = 0; i < length; i++) {
//             numbersTwo.push(parseInt(avgNumbersTwo[i]));
//         }
    
//     var sum = 0;
    
//     for(var i = 0; i < numbersTwo.length; i++) {
//         var sum = (sum + numbersTwo[i]);
//         }
//     var avgTwo = sum / numbersTwo.length;
//     finalAverages.push(avgTwo);
// }

// function finalAnswer() {

//     if (finalAverages[0] > finalAverages[1]) {
//         alert("It's true! " + finalAverages[0] + " is bigger than " + finalAverages[1]);
//     }
//     alert("It's false! " + finalAverages[0] + " is not bigger than " + finalAverages[1]);

// }
// inputFirstArray();
// inputSecondArray();
// getAverage();
// getSecondAverage();
// finalAnswer();
   
//Question 12

// function willByDrink() {

//     var temp = prompt("What's the temperature outside?");
//     var cash = prompt("How much money do you have?");

//     if (temp > 80 && cash > 10.5) {
//         alert("True! It's hot out and you have the money. Get yourself a drink, buddy!");
//     }
//         alert("False! You can wait until you get home.");
// }

// willByDrink();

// //Question 13
// I created the anverngerName function to work with and get used to
// working with multiple arrays and well as array methods and do so 
// in a fun way.  The purpose of the funcition is to provide the user with the
//secret identity of one of the original five Avengers from the comice and will 
//return the information if the correct Avenger is entered.  If not, an alert will
//pop up informing the user that the Avenger entered is not an original Avenger.

//Avenger names.

const originalAvengers = []

originalAvengers.push("Thor");
originalAvengers.push('Iron Man');
originalAvengers.push("Hulk");
originalAvengers.push('Ant Man');
originalAvengers.push('Wasp');

//Avenger secret identity.

const avengerIdentity = [];

avengerIdentity.push('Donald Blake');
avengerIdentity.push('Tony Stark');
avengerIdentity.push('Bruce Banner');
avengerIdentity.push('Hank Pym');
avengerIdentity.push('Janet Van Dyne');

//Function to get Avenger's name and secret identity along with user prompt.

function avengerName() {

    var avenger = prompt('Which original Avenger secrect identity do you want to know?:');
        avenger.toUpperCase();

    for (var i = 0; i < originalAvengers.length; i++) {
        if (avenger == originalAvengers[i]) {
            alert(originalAvengers[i] + "'s real name is " + avengerIdentity[i]);
            }      
        }   alert('This is not an original Avenger.'); 
    }

avengerName();

  