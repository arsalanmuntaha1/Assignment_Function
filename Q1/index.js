"use strict";
//--------------------------------------------_ASSIGNMENT_------------------------------------------------------------------------------------------------------------
// Q1-Write a javascript function that accept a string as a parameter and counts the number of vowels within the string?
function message(author) {
    let quote = "“There is nothing either good or bad, but thinking makes it so.” said by " + author; //Creating a function that accept a string as a parameter
    return quote;
}
message("William Shakespear");
let countVowels = 0; //Counting a number of vowels within the string
const vowelWords = 'aeiou';
for (const char of message("William Shakespear")) {
    if (vowelWords.includes(char.toLocaleLowerCase()))
        countVowels++;
}
console.log("Total vowels count of the statement is : ", countVowels); //Result: Total vowels count of the statement is : 28
