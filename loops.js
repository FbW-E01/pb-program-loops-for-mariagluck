// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

let counter = 1;
  
for (let counter = 0; counter < 21; counter++) {

console.log(counter);
}

// ANSWER: it prints 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

let bottles = 5;
  
for (let i = 1; i < 6; i++) {
    const bottle = bottles[i];
    switch(i) {
        case 1:
         console.log("There is " + i + " beer on the wall.")
          break;
        default:
        console.log("There are " + i + " beers on the wall."); 
    }
}

// ANSWER: 
// There is 1 beer on the wall.
// There are 2 beers on the wall.
// There are 3 beers on the wall.
// There are 4 beers on the wall.
// There are 5 beers on the wall.


// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

let reporter = 2;
  
for (let i = 0; i < 21; i++) {
    const report = reporter[i];
    if (i % 2 == 0) {
        console.log(i + " number is even.");
    } else {
        console.log(i + " number is odd.");
    }
}
// ANSWER: 
// 0 number is even.
// 1 number is odd.
// 2 number is even.
// 3 number is odd.
// 4 number is even.
// 5 number is odd.
// 6 number is even.
// 7 number is odd.
// 8 number is even.
// 9 number is odd.
// 10 number is even.
// 11 number is odd.
// 12 number is even.
// 13 number is odd.
// 14 number is even.
// 15 number is odd.
// 16 number is even.
// 17 number is odd.
// 18 number is even.
// 19 number is odd.
// 20 number is even.


// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXAMPLE 1
// let multiplier = 9;
// for (let i = 0; i < 11; i++) {
//     let result = multiplier * i;
//     console.log(multiplier + ' * ' + i + ' = ' + result);
// }

// EXAMPLE 2
for (let multiplier = 0; multiplier <= 10; multiplier++) {
 for (let i = 0; i <= 10; i++) {
   let result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}


// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


let FizzBuzz = 2;
  
for (let i = 0; i <= 100; i++) {
    const report = reporter[i];
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log("FizzBuzz");
    }

}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.

let sum = 0;
for (let i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);

// ANSWER: 233168

// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >

for (let i = 100; i <= 1000; i = i + 100) {

console.log(i);
}


// >0 2 4 6 8 10
// >
for (let i = 0; i <= 10; i = i + 2) {

    console.log(i);
    }
    

// >3 6 9 12 15
// >
for (let i = 3; i <= 15; i = i + 3) {

    console.log(i);
    }
    

// >9 8 7 6 5 4 3 2 1 0
// >
for (let i = 9; i >= 0; i--) {

    console.log(i);
    }
 
// >1 1 1 2 2 2 3 3 3 4 4 4
// >

for (i = 1; i <= 4; i++){
    for(j = 1;j <= 3; j++){
        console.log(i);
    }
}
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let min = 0, max = 4, times = 3;
for (i = 0; i < times; i++) {
  for (let j = min; j <= max; j++) {
       console.log(j);
  }
}



// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
  
 let word = "radar";
    for (i = 0; i < word.length/2; i++) {
         if (word[i] !== word[word.length - 1 - i]) {
              console.log(false);
         } else {
              console.log(true);
         }
       
    }

    // ANSWER: It prints true (for the word "radar"). It is a palindrome.